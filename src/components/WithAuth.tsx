"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function WithAuth(Component: any) {
  return function WithAuth(props: any) {
let accessToken :any = null;
    useEffect(() => {
     accessToken = localStorage.getItem("accessToken");
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
