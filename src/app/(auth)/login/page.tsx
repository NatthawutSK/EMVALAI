"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { z } from "zod";

type Props = {};

type Input = z.infer<typeof loginSchema>;

export default function Login({}: Props) {
  const [showPass, setShowPass] = useState<boolean>(false);

  const form = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Input) => {
    console.log(data);
  };

  return (
    <div className="h-screen">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex items-center justify-between">
                          <Input
                            placeholder="Enter your password..."
                            {...field}
                            type={showPass ? "text" : "password"}
                          />
                          <span className="ml-2 text-gray-500 text-lg hover:text-black">
                            {showPass ? (
                              <FaRegEyeSlash
                                onClick={() => setShowPass(!showPass)}
                              />
                            ) : (
                              <FaRegEye
                                onClick={() => setShowPass(!showPass)}
                              />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="text-center w-full " type="submit">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div>
          <p className="text-center mt-4">
            Don't have an account?{"  "}
            <a href="/register" className="hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
