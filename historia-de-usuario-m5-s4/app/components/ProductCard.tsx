"use client";

type Product = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  image_url?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <img
        src={product.image_url || "https://via.placeholder.com/300"}
        alt={product.nombre}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {product.nombre}
        </h3>

        <p className="text-blue-600 font-bold mt-2">${product.precio}</p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Stock: {product.stock}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Ver producto
        </button>
      </div>
    </div>
  );
}
