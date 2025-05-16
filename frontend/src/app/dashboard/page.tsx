"use client";

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import Header from "@/_components/Header";
import Dashboard from "@/_components/Viewcards";

export default function DashboardPage() {
  useProtectedRoute(["admin", "usuario"]); // Protege esta rota

  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
