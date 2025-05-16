"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const useProtectedRoute = (allowedRoles: string[]) => {
  const { userRole } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userRole === null) {
      // ainda carregando userRole
      return;
    }

    if (!allowedRoles.includes(userRole)) {
      router.push("/unauthorized");
    }

    setLoading(false);
  }, [userRole]);

  return loading; // se quiser usar para exibir um loading spinner
};
