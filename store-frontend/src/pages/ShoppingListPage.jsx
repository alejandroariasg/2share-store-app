import React, { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  /**
   * The function `loadShoppingList` makes an API call to retrieve a shopping list and updates the
   * state with the received data or logs an error if the call fails.
   */
  const loadShoppingList = () => {
    axios.get('/api/shopping-list')
      .then(res => setItems(res.data))
      .catch(err => console.error('Failed to load list', err));
  };
  
  useEffect(() => {
    loadShoppingList();
  }, []);

  /* The `handleRemove` function is an asynchronous function that is triggered when a user clicks on
  the "Remove" button for a specific item in the shopping list. Here is a breakdown of what it
  does: */
  const handleRemove = async (productId) => {
    try {
        await axios.delete(`/api/shopping-list/${productId}`);
        setMessage('Producto eliminado de tu lista.');
        loadShoppingList();
    } catch (err) {
      setMessage('Error al eliminar producto.');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const handleToggleTag = async (productId, tagged) => {
    try {
      await axios.patch(`/api/shopping-list/${productId}/tag?tagged=${tagged}`);
      loadShoppingList();
    } catch (err) {
      setMessage('Error updating tag status.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Shopping List</h2>

      {message && (
        <div className="alert alert-info mt-3">{message}</div>
      )}

      {items.length === 0 ? (
        <div className="alert alert-secondary text-center mt-4">
          Your shopping list is empty. <br />
          <a href="/products" className="alert-link">View available products</a>.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {items.map(item => (
            <div className="col" key={item.productId}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.productName}</h5>

                  <p className="card-text">
                    Status:{' '}
                    <span className={`badge bg-${item.tagged ? 'success' : 'secondary'}`}>
                      {item.tagged ? 'In Cart' : 'Not Tagged'}
                    </span>
                  </p>

                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className={`btn btn-sm ${item.tagged ? 'btn-warning' : 'btn-success'}`}
                      onClick={() => handleToggleTag(item.productId, !item.tagged)}
                    >
                      {item.tagged ? 'Remove from cart' : 'Add to cart'}
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemove(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}