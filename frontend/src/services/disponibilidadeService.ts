import DisponibilidadeFormData from "@/type/disponibilidade_register";
import { API_URL } from "./api_url/api";

export const cadastrarDisponibilidade = async (
  data: DisponibilidadeFormData
) => {
  const response = await fetch(`${API_URL}/disponibilidades`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      medico_id: parseInt(data.medico_id),
      unidade_id: parseInt(data.unidade_id),
      capacidade_maxima: parseInt(data.capacidade_maxima),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao cadastrar disponibilidade");
  }

  return await response.json();
};
