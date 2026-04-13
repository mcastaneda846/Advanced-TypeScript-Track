import { Product } from "../interfaces/interfaces";
import './ProductCard.css';

// 🔹 Tipado de props (CA_10)
interface ProductCardProps {
  product: Product;
}

// 🔹 Componente
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.imageUrl} alt={product.name} width={150} />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-category"><strong>Category:</strong>{product.category}</p>
    </div>
  );
};