"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "warning" | "">("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // Usuario creado
    if (res.ok) {
      setType("success");
      setMessage("Usuario registrado con éxito");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
    // Usuario ya existe
    else if (res.status === 409) {
      setType("warning");
      setMessage("Este email ya está registrado");
    }
    // Otro error
    else {
      setType("error");
      setMessage("Error al registrar usuario");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Crear cuenta
        </h2>

        {/* Mensaje */}
        {message && (
          <div
            className={`mb-4 p-2 text-center rounded ${
              type === "success"
                ? "bg-green-100 text-green-700"
                : type === "warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="tu@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Registrar
        </button>

        {/* Botón regresar */}
        <div className="text-center mt-4">
          <Link
            href="/login"
            className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
          >
            Regresar al login
          </Link>
        </div>
      </form>
    </div>
  );
}
