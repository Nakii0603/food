"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function home(params: any) {
  const router = useRouter();
  const handle = () => {
    router.push("sign");
  };

  return <div onClick={handle}>agfsgd</div>;
}
