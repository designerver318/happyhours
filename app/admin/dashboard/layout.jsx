// app/dashboard/layout.jsx
"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { isAuthenticated } = useAuth(); // Now properly imported
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/api/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
}