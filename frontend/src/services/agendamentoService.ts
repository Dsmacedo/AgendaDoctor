import { api } from "./api";
import { CreateAgendamento } from "@/type/agendamento";

export const agendarConsulta = async (payload: CreateAgendamento) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token de autenticação não encontrado.");

  const response = await api.post("/agendamentos", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
