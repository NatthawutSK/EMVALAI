import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email(),
    fname: z
      .string()
      .min(1, { message: "First name is required" })
      .min(3, { message: "Your first name should not be that short!" }),
    lname: z
      .string()
      .min(1, { message: "Last name is required" })
      .min(3, { message: "Your last name should not be that short!" }),
    phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(10, { message: "Incorect Phone number" })
      .max(10, { message: "Incorect Phone number" })
      .refine((val) => !isNaN(val as unknown as number), {
        message: "Phone number should be a number",
      }),
    gender: z.string().min(1, { message: "Gender is required" }).max(10),
    dob: z.string().min(1, { message: "Date of birth is required" }),
    password: z
      .string()
      .min(1, { message: "password is required" })
      .min(6, { message: "password must be more than 6 characters" })
      .max(100),
    confirmPassword: z
      .string()
      .min(1, { message: "confirmPassword is required" })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }).max(100),
});
