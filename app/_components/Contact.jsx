"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import ParallaxElement from "./ParallaxElement";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(5, "Email must be at least 5 characters."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be at most 500 characters."),
})

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: ""
    },
  })

  async function onSubmit(data) {
    const url = '/api/contact';
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json();
      console.log("Form Data:", data);
      console.log("Response:", result);

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!", {
          description: "Thank you for reaching out! I'll get back to you soon.",
          position: "bottom-right",
        });
        form.reset(); // Reset form on success
      } else {
        toast.error(result.error || "Failed to send message", {
          description: "Please try again or contact me directly.",
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred", {
        description: "Please try again later.",
        position: "bottom-right",
      });
      console.error("Contact form submission error:", error);
    }
  }
  return (
    <div className="py-16 relative overflow-hidden w-full" id="contact">
      {/* Content Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold">GET IN</h1>
        </ParallaxElement>

        <ParallaxElement speed={0.5}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334]">
            TOUCH
          </h1>
        </ParallaxElement>

        {/* FORM */}
        <ParallaxElement speed={0.2}>
          <div className="mt-12 flex justify-center">
            <Card className="w-full sm:max-w-md border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Contact Me</CardTitle>
                <CardDescription className="text-gray-400">
                  Have a project in mind? Let&apos;s work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      name="fullName"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-fullName" className="text-gray-300">
                            Full Name
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-fullName"
                            aria-invalid={fieldState.invalid}
                            placeholder="Your full name"
                            autoComplete="off"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-email" className="text-gray-300">
                            Email
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-email"
                            aria-invalid={fieldState.invalid}
                            placeholder="Your email"
                            autoComplete="off"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-message" className="text-gray-300">
                            Your Message
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupTextarea
                              {...field}
                              id="form-rhf-demo-message"
                              placeholder="Tell me about your project..."
                              rows={6}
                              className="min-h-24 resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                              aria-invalid={fieldState.invalid}
                            />
                            <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums text-gray-400">
                                {field.value.length}/500 characters
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <FieldDescription className="text-gray-500">
                            Share your project details, requirements, or any questions you have.
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter>
                <div className="flex w-full gap-4">
                  <Button
                    type="submit"
                    form="form-rhf-demo"
                    className="text-black bg-white hover:bg-white-600 w-full"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="text-black bg-white hover:bg-white-600"
                  >
                    Reset
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </ParallaxElement>
      </div>
    </div>
  )
}

export default Contact;
