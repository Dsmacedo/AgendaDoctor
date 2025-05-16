"use client";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import UserFormData from "@/type/usuario_register";

type UserFormProps = {
  register: UseFormRegister<UserFormData>;
  handleSubmit: UseFormHandleSubmit<UserFormData>;
  onSubmit: (data: UserFormData) => void;
  reset: () => void;
  errors: FieldErrors<UserFormData>;
  mensagemSucesso: string | null;
  senhaDigitada: string;
};

const UserForm = ({
  register,
  handleSubmit,
  onSubmit,
  reset,
  errors,
  mensagemSucesso,
  senhaDigitada,
}: UserFormProps) => {
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Nome:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">Nome é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">CPF:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cpf", { required: true })}
            />
            {errors.cpf && (
              <p className="text-red-500 text-sm">CPF é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Data de Nascimento:</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              {...register("data_nasc", { required: true })}
            />
            {errors.data_nasc && (
              <p className="text-red-500 text-sm">
                Data de nascimento é obrigatória
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block font-medium">Celular:</label>
            <input
              type="tel"
              className="w-full border rounded p-2"
              {...register("celular", { required: true })}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm">Celular é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              className="w-full border rounded p-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Número do Cartão SUS:</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              {...register("cartaosus", { required: true })}
            />
            {errors.cartaosus && (
              <p className="text-red-500 text-sm">
                Número do cartão SUS é obrigatório
              </p>
            )}
          </div>
        </div>

        <h5 className="text-lg font-semibold mt-6 mb-4">Endereço</h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">CEP:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cep", { required: true })}
            />
            {errors.cep && (
              <p className="text-red-500 text-sm">CEP é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Endereço:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("endereco", { required: true })}
            />
            {errors.endereco && (
              <p className="text-red-500 text-sm">Endereço é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Número:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("numero", { required: true })}
            />
            {errors.numero && (
              <p className="text-red-500 text-sm">Número é obrigatório</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block font-medium">Bairro:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("bairro", { required: true })}
            />
            {errors.bairro && (
              <p className="text-red-500 text-sm">Bairro é obrigatório</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Cidade:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("cidade", { required: true })}
            />
            {errors.cidade && (
              <p className="text-red-500 text-sm">Cidade é obrigatória</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Estado:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              {...register("estado", { required: true })}
            />
            {errors.estado && (
              <p className="text-red-500 text-sm">Estado é obrigatório</p>
            )}
          </div>
        </div>

        <h5 className="text-lg font-semibold mt-6 mb-4">
          Criar Senha de Login
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Digite uma senha:</label>
            <input
              type="password"
              className="w-full border rounded p-2"
              {...register("senha", { required: true })}
            />
            {errors.senha && (
              <p className="text-red-500 text-sm">Senha é obrigatória</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Repita a senha:</label>
            <input
              type="password"
              className="w-full border rounded p-2"
              {...register("confirm_senha", {
                required: true,
                validate: (value) =>
                  value === senhaDigitada || "As senhas não coincidem",
              })}
            />
            {errors.confirm_senha && (
              <p className="text-red-500 text-sm">
                {errors.confirm_senha.message?.toString()}
              </p>
            )}
          </div>
        </div>

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

        {mensagemSucesso && (
          <div className="mt-4 p-3 bg-green-200 text-green-800 rounded">
            {mensagemSucesso}
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;

// "use client";

// import {
//   UseFormRegister,
//   UseFormHandleSubmit,
//   FieldErrors,
// } from "react-hook-form";

// import UserFormData from "@/type/usuario_register";

// type UserFormProps = {
//   register: UseFormRegister<UserFormData>;
//   handleSubmit: UseFormHandleSubmit<UserFormData>;
//   onSubmit: (data: UserFormData) => void;
//   reset: () => void;
//   errors: FieldErrors<UserFormData>;
//   mensagemSucesso: string | null;
// };

// const UserForm = ({
//   register,
//   handleSubmit,
//   onSubmit,
//   reset,
//   errors,
//   mensagemSucesso,
// }: UserFormProps) => {
//   return (
//     <div className="p-6 ">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">Nome:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("nome", { required: true })}
//             />
//             {errors.nome && (
//               <p className="text-red-500 text-sm">Nome é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">CPF:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("cpf", { required: true })}
//             />
//             {errors.cpf && (
//               <p className="text-red-500 text-sm">CPF é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Data de Nascimento:</label>
//             <input
//               type="date"
//               className="w-full border rounded p-2"
//               {...register("data_nasc", { required: true })}
//             />
//             {errors.data_nasc && (
//               <p className="text-red-500 text-sm">
//                 Data de nascimento é obrigatória
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//           <div>
//             <label className="block font-medium">Celular:</label>
//             <input
//               type="tel"
//               className="w-full border rounded p-2"
//               {...register("celular", { required: true })}
//             />
//             {errors.celular && (
//               <p className="text-red-500 text-sm">Celular é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Email:</label>
//             <input
//               type="email"
//               className="w-full border rounded p-2"
//               {...register("email", { required: true })}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">Email é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Número do Cartão SUS:</label>
//             <input
//               type="number"
//               className="w-full border rounded p-2"
//               {...register("cartaosus", { required: true })}
//             />
//             {errors.cartaosus && (
//               <p className="text-red-500 text-sm">
//                 Número do cartão SUS é obrigatório
//               </p>
//             )}
//           </div>
//         </div>

//         <h5 className="text-lg font-semibold mt-6 mb-4">Endereço</h5>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">CEP:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("cep", { required: true })}
//             />
//             {errors.cep && (
//               <p className="text-red-500 text-sm">CEP é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Endereço:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("endereco", { required: true })}
//             />
//             {errors.endereco && (
//               <p className="text-red-500 text-sm">Endereço é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Número:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("numero", { required: true })}
//             />
//             {errors.numero && (
//               <p className="text-red-500 text-sm">Número é obrigatório</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//           <div>
//             <label className="block font-medium">Bairro:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("bairro", { required: true })}
//             />
//             {errors.bairro && (
//               <p className="text-red-500 text-sm">Bairro é obrigatório</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Cidade:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("cidade", { required: true })}
//             />
//             {errors.cidade && (
//               <p className="text-red-500 text-sm">Cidade é obrigatória</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Estado:</label>
//             <input
//               type="text"
//               className="w-full border rounded p-2"
//               {...register("estado", { required: true })}
//             />
//             {errors.estado && (
//               <p className="text-red-500 text-sm">Estado é obrigatório</p>
//             )}
//           </div>
//         </div>

//         <h5 className="text-lg font-semibold mt-6 mb-4">
//           Criar Senha de Login
//         </h5>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-medium">Digite uma senha:</label>
//             <input
//               type="password"
//               className="w-full border rounded p-2"
//               {...register("senha", { required: true })}
//             />
//             {errors.senha && (
//               <p className="text-red-500 text-sm">Senha é obrigatória</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Repita a senha:</label>
//             <input
//               type="password"
//               className="w-full border rounded p-2"
//               {...register("confirm_senha", {
//                 required: true,
//                 validate: (value) =>
//                   value === watch("senha") || "As senhas não coincidem",
//               })}
//             />
//             {errors.confirm_senha && (
//               <p className="text-red-500 text-sm">
//                 Confirmação de senha é obrigatória
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="flex gap-4 mt-6">
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Salvar
//           </button>
//           <button
//             type="button"
//             onClick={reset}
//             className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//           >
//             Cancelar
//           </button>
//         </div>
//         {mensagemSucesso && (
//           <div className="mt-4 p-3 bg-green-200 text-green-800 rounded">
//             {mensagemSucesso}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default UserForm;
