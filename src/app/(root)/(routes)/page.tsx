"use client";
import { AuthContext } from "@/components/auth/AuthContext";
import { auth, signOut } from "@/lib/firebase/auth";
import { User } from "@firebase/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { HtmlHTMLAttributes, useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleSignOut = () => {
    signOut();
    redirect("/login");
  };

  const user = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, []);

  const handleGetUser = async () => {
    console.log(user);
    console.log(await auth.currentUser?.getIdToken());
  };
  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 ">
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>
            Display Name: {user.displayName ? user.displayName : "Not provided"}
          </p>
          <p>Photo URL: {user.photoURL ? user.photoURL : "Not provided"}</p>
        </div>
      )}
      <Button onClick={handleGetUser}>Get User</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </main>
  );
}
