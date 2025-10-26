"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Contact form validation schema
 */
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

/**
 * Contact component with form validation and API integration
 * @component
 * @returns {JSX.Element} Contact form section
 */
function Contact() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(data) {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      // Try the main API first, fallback to simple API if it fails
      let response;
      try {
        response = await axios.post("/api/contact", data, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 second timeout
        });
      } catch (mainApiError) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Main API failed, trying simple API...', mainApiError.message);
        }
        
        // Fallback to simple API
        response = await axios.post("/api/contact-simple", data, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000,
        });
      }

      if (response.data.success) {
        setSubmitStatus('success');
        form.reset(); // Clear the form
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error(response.data.error || 'Unknown error occurred');
      }
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form error:', err);
      }
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (err.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment before trying again.';
      } else if (err.response?.status === 400) {
        errorMessage = err.response.data.error || 'Please check your input and try again.';
      } else if (err.response?.status === 409) {
        errorMessage = 'Duplicate message detected. Please wait before sending the same message again.';
      } else if (err.response?.status === 503) {
        errorMessage = 'Service temporarily unavailable. Please try again in a few minutes.';
      } else if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (!navigator.onLine) {
        errorMessage = 'No internet connection. Please check your connection and try again.';
      }
      
      setSubmitStatus('error');
      setErrorMessage(errorMessage);
      
      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  }

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden w-full`} id="contact">
      {/* Contact Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
        <h1 className="text-center text-5xl lg:text-7xl font-bold uppercase">
          LET'S WORK
        </h1>
      </ParallaxElement>
      
      <ParallaxElement speed={0.5}>
        <h1 className="text-center text-5xl lg:text-7xl font-bold text-[#353334] uppercase">
          TOGETHER
        </h1>
      </ParallaxElement>
      
      <ParallaxElement speed={0.2}>
        <div className="mt-12 lg:w-[45%] w-[95%] mx-auto">
        <div
          className={
            "relative overflow-hidden z-10 bg-[#2726262e] p-8 rounded-lg shadow-md " +
            "before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl " +
            "after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label> */}
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="mt-1 p-4 py-5 w-full rounded-md bg-[#504f4f00] border border-white placeholder:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label> */}
                    <FormControl>
                      <Input
                        placeholder="Your@email.com"
                        {...field}
                        className="mt-1 p-4 py-5 w-full rounded-md bg-[#504f4f00] border border-white placeholder:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-sm font-medium text-gray-600">
                    Bio
                  </label> */}
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="mt-1 p-4 w-full rounded-md bg-[#504f4f00] border border-white placeholder:text-white"
                        rows="3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-4 py-2 font-bold rounded-md hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {errorMessage || 'Failed to send message. Please try again or contact me directly.'}
                  </div>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
        </ParallaxElement>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
}

export default Contact;
