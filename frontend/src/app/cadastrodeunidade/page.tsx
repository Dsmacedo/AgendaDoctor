"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from "@/_components/Header";
import UnidadeForm from "@/_components/FormRegisterUnidade";
import UnidadeFormData from "@/type/unidade_register";
import { cadastrarUnidade } from "@/services/unidadeService";

const CadastroDeUnidade = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UnidadeFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const onSubmit = async (data: UnidadeFormData) => {
    try {
      await cadastrarUnidade(data);
      setMensagemSucesso("Unidade cadastrada com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar unidade");
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
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-greencolor p-4">
            <h4 className="text-white text-lg font-semibold">
              Cadastro de Unidade de Saúde
            </h4>
          </div>
          <UnidadeForm
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

export default CadastroDeUnidade;
