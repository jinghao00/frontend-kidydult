"use client";
import { useEffect, useContext } from "react";
import LoginForm from "./component/LoginForm";
import { redirect } from "next/navigation";
import { AuthContext } from "@/components/auth/AuthContext";

export default function LoginPage() {
  const user = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  });
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className="w-full max-w-md mt-20">
          <div className="mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
