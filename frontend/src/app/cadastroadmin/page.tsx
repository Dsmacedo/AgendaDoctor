"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from "@/_components/Header";
import AdminForm from "@/_components/FormregisterAdmin";
import AdminFormData from "../../type/admin_register";
import { cadastrarAdmin } from "@/services/adminService";

const CadastroAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AdminFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const onSubmit = async (data: AdminFormData) => {
    // 👉 Remove confirm_senha antes de enviar
    const { confirm_senha, ...dataSemConfirmacao } = data;

    try {
      await cadastrarAdmin(dataSemConfirmacao); // só envia os dados esperados
      setMensagemSucesso("Administrador cadastrado com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar administrador");
    }

    setTimeout(() => {
      setMensagemSucesso(null);
      setMensagemErro(null);
    }, 5000);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="bg-teal-600 p-4">
            <h4 className="text-white text-lg font-semibold">
              Cadastrar Administrador
            </h4>
          </div>
          <AdminForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            reset={reset}
            errors={errors}
            mensagemSucesso={mensagemSucesso}
            senhaDigitada={watch("senha")} // 👈 envia senha para validação do confirm_senha
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

export default CadastroAdmin;
