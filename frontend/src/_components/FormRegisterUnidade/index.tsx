"use client";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import UnidadeFormData from "@/type/unidade_register";

type Props = {
  register: UseFormRegister<UnidadeFormData>;
  handleSubmit: UseFormHandleSubmit<UnidadeFormData>;
  onSubmit: (data: UnidadeFormData) => void;
  reset: () => void;
  errors: FieldErrors<UnidadeFormData>;
  mensagemSucesso: string | null;
};

const UnidadeForm = ({
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
        <label className="block font-medium">Nome da Unidade:</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          {...register("nome_unidade", { required: true })}
        />
        {errors.nome_unidade && (
          <p className="text-red-500 text-sm">Campo obrigatório</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block font-medium">CEP:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("cep", { required: true })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium">Endereço:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("endereco", { required: true })}
          />
        </div>
        <div className="md:col-span-1">
          <label className="block font-medium">Número:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("numerocasa", { required: true })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium">Bairro:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("bairro", { required: true })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium">Cidade:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("cidade", { required: true })}
          />
        </div>
        <div>
          <label className="block font-medium">Estado:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            {...register("estado", { required: true })}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
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

export default UnidadeForm;
