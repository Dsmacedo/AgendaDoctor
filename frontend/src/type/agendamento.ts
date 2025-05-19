export type CreateAgendamento = {
  disponibilidade_id: number;
  sintomas: string;
};

export type Agendamento = {
  id: number;
  sintomas: string;
  data_agendamento: string;

  usuario: {
    id: number;
    nome: string;
    email: string;
  };

  disponibilidade: {
    id: number;
    data: string;
    hora_inicio: string;
    hora_fim: string;
  };
};
