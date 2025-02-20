import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // Fetch orders from localStorage (or backend API)
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleRemoveFromOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <div
        style={{
          width: '100%',
          padding: '20px 40px',
          backgroundColor: '#6a11cb',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          boxSizing: 'border-box',
        }}
      >
        {/* Website Name (Clickable) */}
        <div
          style={{ fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => {
            navigate('/'); // Redirect to the dashboard page
          }}
        >
          BookEase
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/wishlist" style={{ textDecoration: 'none', color: 'white', fontSize: '1.1rem' }}>
            Wishlist
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none', color: 'white', fontSize: '1.1rem' }}>
            Orders
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'white', fontSize: '1.1rem' }}>
            Cart
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem('loggedInUser');
              navigate('/');
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginTop: '80px', flex: 1, padding: '20px' }}>
        {orders.length === 0 ? (
          // Empty Order State
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>0 items in Order</h1>
            <img
              src="https://i.ibb.co/wFxbVxf3/Untitled-design-3.gif" // Replace with your library GIF
              alt="No Orders"
              style={{ width: '300px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>You have not placed any orders</p>
            <button
              onClick={() => navigate('/cart')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6a11cb',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                width: 300,
              }}
            >
              Go to Cart
            </button>
          </div>
        ) : (
          // Filled Order State
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Orders</h1>
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  display: 'flex',
                  gap: '20px',
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px',
                }}
              >
                {/* Book Image */}
                <img
                  src="https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.45" // Replace with actual book image
                  alt={order.title}
                  style={{ width: '100px', borderRadius: '10px' }}
                />

                {/* Book Details */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{order.title}</h3>
                  <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: {order.author}</p>
                  <p style={{ color: '#555', fontSize: '1.2rem' }}>Quantity: {order.quantity}</p>
                  <p style={{ color: '#555', fontSize: '1.2rem' }}>Order ID: {order.id}</p>

                  {/* Remove Item from Order Button */}
                  <button
                    onClick={() => handleRemoveFromOrder(order.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      marginTop: '10px',
                    }}
                  >
                    Remove Item from Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;