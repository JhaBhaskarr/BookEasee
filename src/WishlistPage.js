import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Initialize wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleAddToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isInCart = cart.some((item) => item.id === book.id);

    if (!isInCart) {
      const updatedCart = [...cart, { ...book, quantity: 1 }]; // Add book with default quantity 1
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`${book.name} added to cart!`);
    } else {
      alert(`${book.name} is already in your cart!`);
    }
  };

  const handleRemoveFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== bookId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section (Same as Dashboard) */}
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
            window.location.href = '/'; // Redirect to the dashboard page
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
              window.location.href = '/';
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
      <div style={{ marginTop: '80px', flex: 1, padding: '20px', textAlign: 'center' }}>
        {wishlist.length === 0 ? (
          <>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>0 items in Wishlist</h2>
            <img
              src="https://i.ibb.co/pjKwH0Gh/Untitled-design-1.gif" // Heart loading GIF
              alt="Loading"
              style={{ width: '300px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Your wishlist is empty 🙃</p>
            <button
              onClick={() => navigate('/products')}
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
              Go to Products
            </button>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Wishlist</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', // 3 books per row
                gap: '20px',
              }}
              >
            {wishlist.map((book) => (
              <div
                key={book.id}
                style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >

                {/* Remove from Wishlist Button */}
                <button
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.8rem', // Very small size
                    padding: '0', // Remove padding
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px', // Fixed width
                    height: '20px', // Fixed height
                    color: '#ff4757', // Red color
                  }}
                  onClick={() => handleRemoveFromWishlist(book.id)}
                >
                  ❌
                </button>

                {/* Book Image */}
                <img
                    src={book.image}
                    alt={book.name}
                    style={{
                      width: '150px',
                      height: '225px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      marginBottom: '15px',
                    }}
                  />

                {/* Book Title */}
                <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>{book.name}</h3>

                {/* Book Author */}
                <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: {book.author}</p>

                
                {/* Book Price */}
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>Price: <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>${book.realprice}</span>  <span style={{ color: 'red' }}>${book.price}</span></p>
                {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '73px',
          right: '130px',
          backgroundColor: '#ff4757',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        25% Off
      </div>
                
                {/* Add to Cart Button */}
              <button
                  onClick={() => handleAddToCart(book)}
                  style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#6a11cb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    width: '80%',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;