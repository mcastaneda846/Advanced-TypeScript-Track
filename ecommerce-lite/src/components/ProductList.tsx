import { products } from "../data/data";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export const ProductList = () => {
  return (
    <div className="products-container">
      <h2>Product List</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
};
