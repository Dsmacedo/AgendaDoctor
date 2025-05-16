// src/components/FormRegisterDisponibilidade/index.tsx
"use client";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";

import DisponibilidadeFormData from "@/type/disponibilidade_register";
import { Medico } from "@/type/medico";
import { Unidade } from "@/type/unidade";

type Props = {
  register: UseFormRegister<DisponibilidadeFormData>;
  handleSubmit: UseFormHandleSubmit<DisponibilidadeFormData>;
  onSubmit: (data: DisponibilidadeFormData) => void;
  reset: () => void;
  errors: FieldErrors<DisponibilidadeFormData>;
  mensagemSucesso: string | null;
  medicos: Medico[];
  unidades: Unidade[];
};

const DisponibilidadeForm = ({
  register,
  handleSubmit,
  onSubmit,
  reset,
  errors,
  mensagemSucesso,
  medicos,
  unidades,
}: Props) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label className="block font-medium">Médico:</label>
        <select
          className="w-full border rounded p-2"
          {...register("medico_id", { required: true })}
        >
          <option value="">Selecione...</option>
          {medicos.map((medico) => (
            <option key={medico.id} value={medico.id}>
              {medico.nome}
            </option>
          ))}
        </select>
        {errors.medico_id && (
          <p className="text-red-500 text-sm">Campo obrigatório</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Unidade de Saúde:</label>
        <select
          className="w-full border rounded p-2"
          {...register("unidade_id", { required: true })}
        >
          <option value="">Selecione...</option>
          {unidades.map((unidade) => (
            <option key={unidade.id} value={unidade.id}>
              {unidade.nome_unidade}
            </option>
          ))}
        </select>
        {errors.unidade_id && (
          <p className="text-red-500 text-sm">Campo obrigatório</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Data:</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          {...register("data", { required: true })}
        />
        {errors.data && (
          <p className="text-red-500 text-sm">Campo obrigatório</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium">Hora de Início:</label>
          <input
            type="time"
            className="w-full border rounded p-2"
            {...register("hora_inicio", { required: true })}
          />
          {errors.hora_inicio && (
            <p className="text-red-500 text-sm">Campo obrigatório</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Hora de Fim:</label>
          <input
            type="time"
            className="w-full border rounded p-2"
            {...register("hora_fim", { required: true })}
          />
          {errors.hora_fim && (
            <p className="text-red-500 text-sm">Campo obrigatório</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Capacidade Máxima:</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          {...register("capacidade_maxima", { required: true })}
        />
        {errors.capacidade_maxima && (
          <p className="text-red-500 text-sm">Campo obrigatório</p>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={reset}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
      </div>

      {mensagemSucesso && (
        <div className="mt-4 p-3 bg-green-200 text-green-800 rounded">
          {mensagemSucesso}
        </div>
      )}
    </form>
  );
};

export default DisponibilidadeForm;
