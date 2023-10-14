"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { z } from "zod";

type Input = z.infer<typeof registerSchema>;

export default function Register() {
  const [formStep, setFormStep] = useState(0);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const form = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      fname: "",
      confirmPassword: "",
      lname: "",
      gender: "",
      phone: "",
      dob: "",
    },
  });

  const onSubmit = (data: Input) => {
    console.log(data);
  };

  const ValidateBeforeNext = async () => {
    // Trigger validation for the relevant fields
    await form.trigger(["email", "fname", "lname", "phone"]);

    // Check the validation status of each field
    const emailState = form.getFieldState("email");
    const fnameState = form.getFieldState("fname");
    const phoneState = form.getFieldState("phone");
    const lnameState = form.getFieldState("lname");

    // Check if any of the fields is invalid or not dirty
    if (
      emailState.invalid ||
      fnameState.invalid ||
      phoneState.invalid ||
      lnameState.invalid ||
      !emailState.isDirty ||
      !phoneState.isDirty ||
      !lnameState.isDirty ||
      !fnameState.isDirty
    ) {
      return; // Do not proceed to the next step if any field is invalid or not dirty
    }

    // All fields are valid and dirty, so proceed to the next step
    setFormStep(1);
  };
  return (
    <div className="min-h-screen">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle className="text-center">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative space-y-3 overflow-x-hidden"
              >
                <div
                  className={cn(
                    "space-y-3 transition-transform transform translate-x-0 ease-in-out duration-300",
                    {
                      "transform -translate-x-full": formStep !== 0,
                    }
                  )}
                >
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="fname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your First Name..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="lname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Last Name..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* email */}
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
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "space-y-3 absolute top-0 left-0 right-0 transition-transform transform translate-x-0 ease-in-out duration-300 w-auto",
                    {
                      "transform translate-x-full": formStep !== 1,
                    }
                  )}
                >
                  <div className="flex justify-between  gap-5">
                    {/* gender */}
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["Female", "Male"].map((year, index) => {
                                return (
                                  <SelectItem value={year} key={index}>
                                    {year}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* DOB */}
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Date of birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* password */}
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
                  {/* confirm password */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <div className="flex items-center justify-between">
                            <Input
                              placeholder="Please confirm your password..."
                              {...field}
                              type={showConfirm ? "text" : "password"}
                            />
                            <span className="ml-2 text-gray-500 text-lg hover:text-black">
                              {showConfirm ? (
                                <FaRegEyeSlash
                                  onClick={() => setShowConfirm(!showConfirm)}
                                />
                              ) : (
                                <FaRegEye
                                  onClick={() => setShowConfirm(!showConfirm)}
                                />
                              )}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2 relative pt-6">
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => {
                      setFormStep(0);
                    }}
                    className={cn({
                      hidden: formStep == 0,
                    })}
                  >
                    Go Back
                  </Button>
                  <Button
                    type="submit"
                    className={cn({
                      hidden: formStep == 0,
                    })}
                  >
                    Submit
                  </Button>

                  <Button
                    type="button"
                    variant={"outline"}
                    className={cn({
                      hidden: formStep == 1,
                    })}
                    onClick={() => ValidateBeforeNext()}
                  >
                    Next
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
