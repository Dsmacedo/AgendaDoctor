import AdminFormData from "@/type/admin_register";
import { API_URL } from "./api_url/api";

export const cadastrarAdmin = async (adminData: AdminFormData) => {
  const res = await fetch(`${API_URL}/admin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(adminData),
  });

  if (!res.ok) throw new Error("Erro ao cadastrar administrador");
  return res.json();
};
