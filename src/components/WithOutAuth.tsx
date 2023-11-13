"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function WithoutAuth(Component: any) {
  return function WithoutAuth(props: any) {
    let accessToken: any = null;
    useEffect(() => {
      accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        redirect("/project-management");
      }
    }, []);

    if (accessToken) {
      return null;
    }

    return <Component {...props} />;
  };
}
