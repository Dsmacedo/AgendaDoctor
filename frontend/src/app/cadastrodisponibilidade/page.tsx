"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import DisponibilidadeFormData from "@/type/disponibilidade_register";
import { Medico } from "@/type/medico";
import { Unidade } from "@/type/unidade";

import Header from "@/_components/Header";
import DisponibilidadeForm from "@/_components/FormRegisterDisponibilidade";
import { cadastrarDisponibilidade } from "@/services/disponibilidadeService";

import { getMedicos } from "@/services/medicoService";
import { getUnidades } from "@/services/unidadeService";

const CadastroDeDisponibilidade = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DisponibilidadeFormData>();

  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [unidades, setUnidades] = useState<Unidade[]>([]);

  useEffect(() => {
    async function fetchMedicos() {
      try {
        const medicosData = await getMedicos();
        const unidadesData = await getUnidades();
        setMedicos(medicosData);
        setUnidades(unidadesData);
      } catch (error) {
        console.error("Erro ao carregar médicos:", error);
      }
    }

    fetchMedicos();
  }, []);

  const onSubmit = async (data: DisponibilidadeFormData) => {
    try {
      await cadastrarDisponibilidade(data);
      setMensagemSucesso("Disponibilidade médica cadastrada com sucesso!");
      reset();
    } catch (error: any) {
      setMensagemErro(error.message || "Erro ao cadastrar disponibilidade");
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
              Cadastro de Disponibilidade Médica
            </h4>
          </div>
          <DisponibilidadeForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            reset={reset}
            errors={errors}
            mensagemSucesso={mensagemSucesso}
            medicos={medicos}
            unidades={unidades}
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

export default CadastroDeDisponibilidade;
