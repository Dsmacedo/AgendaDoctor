import { Disponibilidade } from "@/type/consulta_disponibilidade";
import { API_URL } from "./api_url/api";

type FiltroDisponibilidade = {
  medico_id?: string;
  unidade_id?: string;
  data_inicio: string;
  data_fim?: string;
};

export async function getDisponibilidadesComFiltro(
  filtros: FiltroDisponibilidade
): Promise<Disponibilidade[]> {
  const params = new URLSearchParams();

  if (filtros.medico_id?.trim()) {
    params.append("medico_id", filtros.medico_id);
  }

  if (filtros.unidade_id?.trim()) {
    params.append("unidade_id", filtros.unidade_id);
  }

  if (filtros.data_inicio) {
    params.append("data_inicio", filtros.data_inicio);
  }

  if (filtros.data_fim?.trim()) {
    params.append("data_fim", filtros.data_fim);
  }

  const response = await fetch(`${API_URL}/disponibilidades/filtro?${params}`);

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Erro ao buscar disponibilidades:", errorData);
    throw new Error(errorData.message || "Erro ao buscar disponibilidades");
  }

  return response.json();
}
