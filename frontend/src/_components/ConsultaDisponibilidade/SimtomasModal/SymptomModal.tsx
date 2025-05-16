"use client";

import { useState } from "react";

type SymptomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (sintomas: string) => void;
};

export default function SymptomModal({
  isOpen,
  onClose,
  onSubmit,
}: SymptomModalProps) {
  const [sintomas, setSintomas] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center m-1 ">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Descreva seus sintomas</h2>
        <textarea
          className="w-full border rounded p-2 h-32 resize-none"
          placeholder="Descreva aqui seus sintomas..."
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => {
              onSubmit(sintomas);
              setSintomas("");
              onClose();
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
