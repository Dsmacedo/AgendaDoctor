"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Corrigido caminho!
import { login } from "@/services/authService";

import * as S from "./style";

const LoginForm = () => {
  const router = useRouter();
  const { setUserRole } = useAuth(); // Hook do contexto de autenticação

  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { role, token } = await login(formData.email, formData.senha);

      setUserRole(role);

      // sessionStorage.setItem("userRole", role);
      // sessionStorage.setItem("token", token);
      localStorage.setItem("userRole", role);
      localStorage.setItem("token", token);

      document.cookie = `token=${token}; path=/; max-age=3600; SameSite=Lax`;

      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.LottieBackground>
        <iframe
          src="https://lottie.host/embed/b7e174ee-2bea-4737-bb5a-5d47b922922e/UwpC9uHqmW.json"
          frameBorder="0"
        />
      </S.LottieBackground>

      <S.LoginBox>
        <S.Logo src="/Agendadoctor.svg" />
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <S.UserBox>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </S.UserBox>

          <S.UserBox>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <label>Senha</label>
          </S.UserBox>

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          <S.LoginBtn type="submit">
            <span></span>
            Entrar
          </S.LoginBtn>

          <div style={{ marginTop: "1rem" }}>
            <a href="/cadastrodeusuario" style={{ color: "#fff" }}>
              Criar Conta
            </a>
          </div>
        </form>
      </S.LoginBox>
    </S.Wrapper>
  );
};

export default LoginForm;
