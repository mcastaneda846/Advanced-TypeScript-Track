"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(true);
      setMessage("Inicio de sesión exitoso");

      // esperar 1.5 segundos y redirigir
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } else {
      setSuccess(false);
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Iniciar sesión
        </h2>

        {/* Mensaje */}
        {message && (
          <div
            className={`mb-4 p-2 text-center rounded ${
              success
                ? "bg-green-100 text-green-700"
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
            placeholder="••••••••"
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
          Ingresar
        </button>

        {/* Link a registro */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
          No tienes cuenta?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
