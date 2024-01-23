"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function useCheckAuth() {
  const { status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }
}
