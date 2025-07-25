import React, { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductCatalogPage() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  /**
   * The function `handleAddToList` asynchronously adds a product to a shopping list and displays a
   * message based on the outcome.
   */
  const handleAddToList = async (productId) => {
    try {
      await axios.post(`/api/shopping-list/${productId}`);
      setMessage('Producto agregado a tu lista.');
    } catch (err) {
      if (err.response?.status === 400) {
        setMessage('Este producto ya está en tu lista.');
      } else {
        setMessage('Error al agregar producto.');
      }
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <div className="container my-5">
        <h2>Products List</h2>

        {message && (
          <div className="alert alert-info mt-3">{message}</div>
        )}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {products.map(product => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Estado: {product.status || 'Activo'}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleAddToList(product.id)}
                  >
                    Agregar a mi lista
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}