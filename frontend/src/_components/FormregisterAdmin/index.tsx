"use client";

import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

import AdminFormData from "@/type/admin_register";

type AdminFormProps = {
  register: UseFormRegister<AdminFormData>;
  handleSubmit: UseFormHandleSubmit<AdminFormData>;
  onSubmit: (data: AdminFormData) => void;
  reset: () => void;
  errors: FieldErrors<AdminFormData>;
  mensagemSucesso: string | null;
};

const AdminForm = ({
  register,
  handleSubmit,
  onSubmit,
  reset,
  errors,
  mensagemSucesso,
}: AdminFormProps) => {
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* DADOS PESSOAIS */}
        <h5 className="text-lg font-semibold mb-4">Dados Pessoais</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Nome:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">CPF:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cpf", {
                required: "CPF é obrigatório",
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Formato válido: 000.000.000-00",
                },
              })}
            />
            {errors.cpf && (
              <p className="text-red-500 text-sm">{errors.cpf.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Data de Nascimento:</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              {...register("data_nasc", {
                required: "Data de nascimento é obrigatória",
              })}
            />
            {errors.data_nasc && (
              <p className="text-red-500 text-sm">{errors.data_nasc.message}</p>
            )}
          </div>
        </div>

        {/* CONTATO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block font-medium">Celular:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("celular", { required: "Celular é obrigatório" })}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm">{errors.celular.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              className="w-full border rounded p-2"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* ENDEREÇO */}
        <h5 className="text-lg font-semibold mt-6 mb-4">Endereço</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">CEP:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cep", { required: "CEP é obrigatório" })}
            />
            {errors.cep && (
              <p className="text-red-500 text-sm">{errors.cep.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Endereço:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("endereco", { required: "Endereço é obrigatório" })}
            />
            {errors.endereco && (
              <p className="text-red-500 text-sm">{errors.endereco.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Número:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("numero", { required: "Número é obrigatório" })}
            />
            {errors.numero && (
              <p className="text-red-500 text-sm">{errors.numero.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Bairro:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("bairro", { required: "Bairro é obrigatório" })}
            />
            {errors.bairro && (
              <p className="text-red-500 text-sm">{errors.bairro.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Cidade:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cidade", { required: "Cidade é obrigatória" })}
            />
            {errors.cidade && (
              <p className="text-red-500 text-sm">{errors.cidade.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Estado:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("estado", { required: "Estado é obrigatório" })}
            />
            {errors.estado && (
              <p className="text-red-500 text-sm">{errors.estado.message}</p>
            )}
          </div>
        </div>

        {/* SENHA */}
        <h5 className="text-lg font-semibold mt-6 mb-4">Criar Senha</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Senha:</label>
            <input
              type="password"
              className="w-full border rounded p-2"
              {...register("senha", {
                required: "Senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "Senha deve ter pelo menos 6 caracteres",
                },
              })}
            />
            {errors.senha && (
              <p className="text-red-500 text-sm">{errors.senha.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Confirmar Senha:</label>
            <input
              type="password"
              className="w-full border rounded p-2"
              {...register("confirm_senha", {
                required: "Confirme a senha",
                validate: (value, formValues) =>
                  value === formValues.senha || "Senhas não coincidem",
              })}
            />
            {errors.confirm_senha && (
              <p className="text-red-500 text-sm">
                {errors.confirm_senha.message}
              </p>
            )}
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={reset}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>

        {/* SUCESSO */}
        {mensagemSucesso && (
          <div className="mt-4 p-3 bg-green-200 text-green-800 rounded">
            {mensagemSucesso}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminForm;
