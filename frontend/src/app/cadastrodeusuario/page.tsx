"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from "@/_components/Header";
import UserForm from "@/_components/FormregisterUsuario";
import UserFormData from "@/type/usuario_register";
import { cadastrarUsuario } from "@/services/userService";

const CadastroDeUsuario = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const onSubmit = async (data: UserFormData) => {
    const { confirm_senha, ...dataSemConfirmSenha } = data;

    try {
      await cadastrarUsuario(dataSemConfirmSenha);
      setMensagemSucesso("Usuário cadastrado com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar usuário");
    }

    setTimeout(() => {
      setMensagemSucesso(null);
      setMensagemErro(null);
    }, 5000);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 mb-20 px-4 ">
        <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-teal-600 p-4">
            <h4 className="text-white text-lg font-semibold">
              Cadastrar usuário
            </h4>
          </div>
          <UserForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            reset={reset}
            errors={errors}
            mensagemSucesso={mensagemSucesso}
            senhaDigitada={watch("senha")} // passa a senha para comparação
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

export default CadastroDeUsuario;
