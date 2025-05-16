import UserFormData from "@/type/usuario_register";
import { API_URL } from "./api_url/api";

export const cadastrarUsuario = async (data: UserFormData) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao cadastrar usuário");
  }

  return await response.json();
};
