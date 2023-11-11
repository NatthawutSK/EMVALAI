"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function WithAuth(Component: any) {
  return function WithAuth(props: any) {
    const accessToken = localStorage.getItem("accessToken");
    useEffect(() => {
      if (!accessToken) {
        redirect("/register");
      }
    }, []);

    if (!accessToken) {
      return null;
    }

    return <Component {...props} />;
  };
}
