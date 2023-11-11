// "use client";
// import { redirect } from "next/navigation";
// import React, { useEffect } from "react";

// export default function WithoutAuth(Component: any) {
//   return function WithoutAuth(props: any) {
//     const accessToken = !!localStorage.getItem("accessToken");
//     useEffect(() => {
//       if (accessToken) {
//         redirect("/task");
//       }
//     }, []);

//     if (accessToken) {
//       return null;
//     }

//     return <Component {...props} />;
//   };
// }
