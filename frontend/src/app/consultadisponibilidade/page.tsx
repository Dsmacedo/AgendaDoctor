"use client";

import Header from "@/_components/Header";
import ConsultaDisponibilidade from "@/_components/ConsultaDisponibilidade";

export default function ConsultaDisponibilidadePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-greencolor">
          Consultar Agenda
        </h2>
        <ConsultaDisponibilidade />
      </main>
    </>
  );
}
