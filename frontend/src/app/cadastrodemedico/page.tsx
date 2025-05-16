"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import Header from "@/_components/Header";
import DoctorForm from "@/_components/FormregisterDoctor";

// Types
import DoctorFormData from "@/type/doctor_register";
import { Especialidade } from "@/type/especialidade";

import { cadastrarMedico } from "@/services/medicoService";
import { getEspecialidades } from "@/services/especialidadeService";

const CadastrarMedico = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DoctorFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    async function fetchEspecialidades() {
      try {
        const data = await getEspecialidades();
        setEspecialidades(data);
      } catch (err) {
        console.error("Erro ao buscar especialidades:", err);
      }
    }

    fetchEspecialidades();
  }, []);

  const onSubmit = async (data: DoctorFormData) => {
    try {
      await cadastrarMedico(data);
      setMensagemSucesso("Médico cadastrado com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar médico");
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
              Cadastrar Médico
            </h4>
          </div>
          <DoctorForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            reset={reset}
            errors={errors}
            mensagemSucesso={mensagemSucesso}
            especialidades={especialidades}
          />

          {/* Erro opcional */}
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

export default CadastrarMedico;
