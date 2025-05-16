"use client";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import EspecialidadeFormData from "@/type/especialidade_register";

type Props = {
  register: UseFormRegister<EspecialidadeFormData>;
  handleSubmit: UseFormHandleSubmit<EspecialidadeFormData>;
  onSubmit: (data: EspecialidadeFormData) => void;
  reset: () => void;
  errors: FieldErrors<EspecialidadeFormData>;
  mensagemSucesso: string | null;
};

const EspecialidadeForm = ({
  register,
  handleSubmit,
  onSubmit,
  reset,
  errors,
  mensagemSucesso,
}: Props) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label className="block font-medium">Cadastre uma especialidade:</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          placeholder="Digite aqui"
          {...register("especialidade", { required: true })}
        />
        {errors.especialidade && (
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

export default EspecialidadeForm;
