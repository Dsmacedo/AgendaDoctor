"use client";
import Logo from "../Logo";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Remove do sessionStorage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");

    // Limpa o cookie 'token' que é usado pelo middleware
    document.cookie = "token=; Max-Age=0; path=/";

    // Redireciona para login
    window.location.href = "/login";
  };

  return (
    <header className="bg-greencolor text-white">
      <nav className="py-2 px-4 flex items-center justify-between relative">
        <Logo />
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="bg-white rounded-full px-3 py-2 text-lg font-bold text-greencolor focus:outline-none"
          >
            DS
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
              <div className="px-4 py-2 border-b">
                <strong className="text-gray-700">nameusuairio</strong>
              </div>
              <Link
                href="/perfil"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Meu Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
