"use client";

import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

import DoctorFormData from "@/type/doctor_register";
import { Especialidade } from "@/type/especialidade";

type DoctorFormProps = {
  register: UseFormRegister<DoctorFormData>;
  handleSubmit: UseFormHandleSubmit<DoctorFormData>;
  onSubmit: (data: DoctorFormData) => void;
  reset: () => void;
  errors: FieldErrors<DoctorFormData>;
  mensagemSucesso: string | null;
  especialidades: Especialidade[];
};

const DoctorForm = ({
  register,
  handleSubmit,
  onSubmit,
  reset,
  errors,
  mensagemSucesso,
  especialidades,
}: DoctorFormProps) => {
  return (
    <div className="p-6 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Nome Completo:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">Nome é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Gênero:</label>
            <select
              className="w-full border rounded p-2"
              {...register("genero", { required: true })}
            >
              <option value="">Selecione...</option>
              <option value="Hetero">Hetero</option>
              <option value="Cisgenero">Cisgênero</option>
              <option value="Trans">Trans</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.genero && (
              <p className="text-red-500 text-sm">Campo obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Celular:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="(00) 00000-0000"
              {...register("celular", { required: true })}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm">Campo obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              className="w-full border rounded p-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Campo obrigatório</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block font-medium">CRM:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("crm", { required: true })}
            />
            {errors.crm && (
              <p className="text-red-500 text-sm">Campo obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Especialidade:</label>
            <select
              className="w-full border rounded p-2"
              {...register("especialidade", { required: true })}
            >
              <option value="">Selecione...</option>
              {especialidades.map((esp) => (
                <option key={esp.id} value={esp.nome}>
                  {esp.nome}
                </option>
              ))}
            </select>
            {errors.especialidade && (
              <p className="text-red-500 text-sm">Campo obrigatório</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mt-6 ">
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
    </div>
  );
};

export default DoctorForm;
