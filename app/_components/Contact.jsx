"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import axios from "axios";

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

function Contact() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    console.log("Form Data:", data);
    try {
      const response = await axios.post("/api/contact", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="fade-in" id="contact">
      <h1 className="text-center lg:text-start text-5xl lg:text-7xl font-bold uppercase">
        LET'S WORK
      </h1>
      <h1 className="text-center lg:text-start text-5xl lg:text-7xl font-bold text-[#353334] uppercase">
        TOGETHER
      </h1>
      <div className=" mt-12 lg:w-[45%] w-[95%] mx-auto">
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
                className="w-full bg-blue-600 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              >
                Update Profile
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease-in-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
