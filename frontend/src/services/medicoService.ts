import DoctorFormData from "@/type/doctor_register";
import { API_URL } from "./api_url/api";

export const cadastrarMedico = async (medicoData: DoctorFormData) => {
  const token = sessionStorage.getItem("token"); // ou localStorage, dependendo do que você usou

  const response = await fetch(`${API_URL}/medicos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(medicoData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao cadastrar médico");
  }

  return await response.json();
};

export const getMedicos = async () => {
  const token = sessionStorage.getItem("token");

  const response = await fetch(`${API_URL}/medicos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Erro ao buscar médicos");
  return await response.json();
};

// import DoctorFormData from "@/type/doctor_register";
// import { API_URL } from "./api_url/api";

// export const cadastrarMedico = async (data: DoctorFormData) => {
//   const res = await fetch(`${API_URL}/medicos`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) throw new Error("Erro ao cadastrar médico");
//   return res.json();
// };
