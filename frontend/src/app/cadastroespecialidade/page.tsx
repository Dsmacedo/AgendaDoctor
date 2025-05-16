"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from "@/_components/Header";
import EspecialidadeForm from "@/_components/FormRegisterEspecialidade";
import EspecialidadeFormData from "@/type/especialidade_register";
import { cadastrarEspecialidade } from "@/services/especialidadeService";

const CadastroDeEspecialidade = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EspecialidadeFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const onSubmit = async (data: EspecialidadeFormData) => {
    try {
      await cadastrarEspecialidade(data);
      setMensagemSucesso("Especialidade cadastrada com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar especialidade");
    }

    setTimeout(() => {
      setMensagemSucesso(null);
      setMensagemErro(null);
    }, 4000);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-greencolor p-4">
            <h4 className="text-white text-lg font-semibold">
              Cadastrar uma Especialidade Médica
            </h4>
          </div>
          <EspecialidadeForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            reset={reset}
            errors={errors}
            mensagemSucesso={mensagemSucesso}
          />
          {mensagemErro && (
            <div className="mt-4 p-3 bg-red-200 text-red-800 rounded">
              {mensagemErro}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CadastroDeEspecialidade;
