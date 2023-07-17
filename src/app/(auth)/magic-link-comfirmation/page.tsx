"use client";
import { confirmSignInWithEmail } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MagicLinkConfirmation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    const confirmAndRedirect = async () => {
      await confirmSignInWithEmail();

      router.push("/");
    };
    confirmAndRedirect();
  });
  return <>Loading...</>;
}
