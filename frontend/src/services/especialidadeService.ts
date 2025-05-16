import EspecialidadeFormData from "@/type/especialidade_register";
import { API_URL } from "./api_url/api";

export const cadastrarEspecialidade = async (data: EspecialidadeFormData) => {
  const response = await fetch(`${API_URL}/especialidades`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome: data.especialidade }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao cadastrar especialidade");
  }

  return await response.json();
};

export const getEspecialidades = async () => {
  const res = await fetch(`${API_URL}/especialidades`);
  if (!res.ok) throw new Error("Erro ao buscar especialidades");
  return res.json();
};
