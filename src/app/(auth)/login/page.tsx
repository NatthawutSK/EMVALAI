"use client";
import WithoutAuth from "@/components/WithOutAuth";
// import WithOutAuth from "@/components/WithOutAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/redux/store";
import { loginSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { z } from "zod";

type Props = {};

type Input = z.infer<typeof loginSchema>;

const Login = ({}: Props) => {
  const dispatch = useAppDispatch();
  const [showPass, setShowPass] = useState<boolean>(false);
  const form = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast: showToast } = useToast();
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken");
  const onSubmit = async (dataForm: Input) => {
    try {
      const response = await fetch("http://localhost:8082/auth-service/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email: dataForm.email,
          password: dataForm.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data.user);
      if (data.accessToken === null || data.user === null) {
        showToast({
          title: "Login failed",
          description: "Email or password is incorrect",
          variant: "destructive",
        });
      } else {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/project-management");
      }
    } catch (error) {
      console.error(error);
    }
    console.log(dataForm);
  };

  return (
    <div className="h-screen">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[420px]">
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
};

export default WithoutAuth(Login);
