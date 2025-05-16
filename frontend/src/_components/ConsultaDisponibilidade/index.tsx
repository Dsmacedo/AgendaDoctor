"use client";

import { useEffect, useState } from "react";

import { Disponibilidade } from "@/type/consulta_disponibilidade";
import { Medico } from "@/type/medico";
import { Unidade } from "@/type/unidade";

import { getMedicos } from "@/services/medicoService";
import { getUnidades } from "@/services/unidadeService";
import { getDisponibilidadesComFiltro } from "@/services/consultaDisponibilidadeService";

import SymptomModal from "./SimtomasModal/SymptomModal";

type FiltrosConsulta = {
  unidade_id: string;
  medico_id: string;
  data_inicio: string;
  data_fim: string;
};

const ConsultaDisponibilidade = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [consultas, setConsultas] = useState<Disponibilidade[]>([]);
  const [filtros, setFiltros] = useState<FiltrosConsulta>({
    unidade_id: "",
    medico_id: "",
    data_inicio: "",
    data_fim: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [medicosData, unidadesData] = await Promise.all([
          getMedicos(),
          getUnidades(),
        ]);
        setMedicos(medicosData);
        setUnidades(unidadesData);
      } catch (error) {
        console.error("Erro ao carregar médicos ou unidades:", error);
      }
    }

    fetchData();
  }, []);

  const buscarConsultas = async () => {
    if (!filtros.data_inicio) {
      alert("Selecione uma data de início.");
      return;
    }

    const params = new URLSearchParams();
    if (filtros.medico_id) params.append("medico_id", filtros.medico_id);
    if (filtros.unidade_id) params.append("unidade_id", filtros.unidade_id);
    if (filtros.data_inicio) params.append("data_inicio", filtros.data_inicio);
    if (filtros.data_fim) params.append("data_fim", filtros.data_fim);

    try {
      const data = await getDisponibilidadesComFiltro(filtros);

      console.log("📋 Resultado da API:", data); // 👉 Adicione esse log

      if (Array.isArray(data)) {
        setConsultas(data);
      } else {
        setConsultas([]); // evita quebrar o .map()
        console.error("❌ Dados inesperados recebidos da API:", data);
      }
    } catch (err) {
      console.error("❌ Erro ao buscar disponibilidades:", err);
      setConsultas([]); // segurança
    }
  };

  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultaSelecionada, setConsultaSelecionada] =
    useState<Disponibilidade | null>(null);

  const handleAgendarConsulta = (consulta: Disponibilidade) => {
    setConsultaSelecionada(consulta);
    setIsModalOpen(true);
  };

  const handleSubmitSintomas = (sintomas: string) => {
    console.log("📋 Consulta:", consultaSelecionada);
    console.log("🩺 Sintomas:", sintomas);
    // Aqui você pode enviar para backend ou salvar de alguma forma
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Filtros */}
      <div className="w-full md:w-1/3 bg-white p-4 shadow rounded">
        <div className="mb-4">
          <label className="font-medium block">Unidade de Saúde:</label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) =>
              setFiltros({ ...filtros, unidade_id: e.target.value })
            }
          >
            <option value="">Todas</option>
            {unidades.map((unidade) => (
              <option key={unidade.id} value={unidade.id}>
                {unidade.nome_unidade}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="font-medium block">Médico:</label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) =>
              setFiltros({ ...filtros, medico_id: e.target.value })
            }
          >
            <option value="">Todos</option>
            {medicos.map((medico) => (
              <option key={medico.id} value={medico.id}>
                {medico.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="font-medium block">Data Início:</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            onChange={(e) =>
              setFiltros({ ...filtros, data_inicio: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="font-medium block">Data Fim:</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            onChange={(e) =>
              setFiltros({ ...filtros, data_fim: e.target.value })
            }
          />
        </div>

        <button
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          onClick={buscarConsultas}
        >
          Buscar
        </button>
      </div>

      {/* Lista de consultas */}
      <div className="w-full md:w-2/3">
        {consultas.length === 0 ? (
          <p className="text-gray-600">Nenhuma disponibilidade encontrada.</p>
        ) : (
          <div className="space-y-4">
            {consultas.map((consulta, index) => (
              <div key={index} className="bg-white shadow p-4 rounded">
                <p>
                  <strong>Data:</strong> {consulta.data}
                </p>
                <p>
                  <strong>Horário:</strong> {consulta.hora_inicio} às{" "}
                  {consulta.hora_fim}
                </p>
                <p>
                  <strong>Unidade:</strong> {consulta.unidade.nome_unidade}
                </p>
                <p>
                  <strong>Médico:</strong> {consulta.medico.nome}
                </p>
                <p>
                  <strong>Especialidade:</strong>{" "}
                  {consulta.medico.especialidade}
                </p>
                <p>
                  <strong>Limite:</strong> {consulta.capacidade_maxima}
                </p>
                <button
                  className="bg-greencolor text-white mt-2 px-4 py-2 rounded"
                  onClick={() => handleAgendarConsulta(consulta)}
                >
                  Agendar Consulta
                </button>
              </div>
            ))}
          </div>
        )}
        <SymptomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitSintomas}
        />
      </div>
    </div>
  );
};

export default ConsultaDisponibilidade;
