import { Medico } from "./medico";
import { Unidade } from "./unidade";

export type Disponibilidade = {
  id: number;
  data: string;
  hora_inicio: string;
  hora_fim: string;
  capacidade_maxima: number;
  medico: Medico;
  unidade: Unidade;
};
