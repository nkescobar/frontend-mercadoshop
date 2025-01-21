"use client";

import { Product } from '@/shared/types/product';
import '@/styles/products.css';


export default function ProductList({ products = [], currentPage, setCurrentPage }: { products?: Product[], currentPage: number, setCurrentPage: (page: number) => void }) {
  const productsPerPage = 6;
  const pagesVisited = currentPage * productsPerPage;

  const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
    <li key={product.id} className="product-card">
      <img src={product.picture} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">
          Precio: {product.price.currency} {product.price.amount}
        </p>
        <p className="condition">{product.condition === "new" ? "Nuevo" : "Usado"}</p>
        <p className={product.free_shipping ? "free-shipping" : ""}>
          {product.free_shipping ? "Envío gratis" : "Sin envío gratis"}
        </p>
      </div>
    </li>
  ));

  const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <div className="product-list-container">
      <ul className="product-list">{displayProducts}</ul>
      <div className="pagination">
        {[...Array(pageCount)].map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentPage(index)} 
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
