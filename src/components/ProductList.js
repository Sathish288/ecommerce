import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (signal) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://fakestoreapi.com/products", {
        signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);

    return () => controller.abort(); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div className="product-list">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="product-list">
        <p>Error: {error}</p>
        <button onClick={() => fetchProducts()}>Retry</button>
      </div>
    );
  }

  if (products.length === 0) {
    return <div className="product-list">No products available.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
