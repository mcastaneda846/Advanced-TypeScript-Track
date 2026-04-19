'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  image_url?: string;
};

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      {/* Header */}
      <div className="flex justify-end mb-1">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Título */}
      <div className="mb-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Productos
        </h1>
      </div>

      {/* Contenedor de productos */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}