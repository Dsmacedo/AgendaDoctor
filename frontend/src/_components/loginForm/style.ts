// components/LoginForm/style.ts
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(#000000, #09897f);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LottieBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  z-index: 0;
  opacity: 0.9;
  iframe {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
`;

export const LoginBox = styled.div`
  z-index: 1;
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 190px;
  margin-bottom: 10px;
`;

export const UserBox = styled.div`
  position: relative;
  margin-bottom: 30px;
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 12px;
    color: #03e9f4;
  }
`;

const moveLine = keyframes`
  0% { left: -100%; }
  50%, 100% { left: 100%; }
`;

export const LoginBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  overflow: hidden;
  margin-top: 20px;
  letter-spacing: 4px;
  background: transparent;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: #000;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #fff, 0 0 25px #fff, 0 0 50px #fff, 0 0 100px #f40303;
  }

  span {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff);
    animation: ${moveLine} 2s linear infinite;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
`;
