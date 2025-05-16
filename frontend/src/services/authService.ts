import { API_URL } from "./api_url/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || `${API_URL}`;

type LoginResponse = {
  role: "admin" | "usuario";
  token: string;
};

export const login = async (
  email: string,
  senha: string
): Promise<LoginResponse> => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    let errorMessage = "Erro ao fazer login";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Se a resposta não for JSON válida
    }
    throw new Error(errorMessage);
  }

  const data = await response.json();

  if (!data.token || !data.role) {
    throw new Error("Resposta inválida do servidor.");
  }

  return {
    role: data.role,
    token: data.token,
  };
};
