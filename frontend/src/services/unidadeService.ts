import UnidadeFormData from "@/type/unidade_register";
import { API_URL } from "./api_url/api";

export const cadastrarUnidade = async (data: UnidadeFormData) => {
  const response = await fetch(`${API_URL}/unidades`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao cadastrar unidade");
  }

  return await response.json();
};

export const getUnidades = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/unidades`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Erro ao buscar unidades");
  return await res.json();
};
