import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cart.filter((item) => item.id !== bookId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (bookId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === bookId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddToWishlist = (book) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlist.some((item) => item.id === book.id);

    if (!isInWishlist) {
      const updatedWishlist = [...wishlist, book];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      alert(`${book.name} added to wishlist!`);
    } else {
      alert(`${book.name} is already in your wishlist!`);
    }
  };

  const handleApplyCoupon = () => {
    setCouponApplied(true);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = couponApplied ? 2 : 0;
    const deliveryCharges = 0.99;
    const total = subtotal - discount + deliveryCharges;
    return { subtotal, discount, deliveryCharges, total };
  };

  const { subtotal, discount, deliveryCharges, total } = calculateTotal();

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
            onClick={handleLogout}
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
        {cart.length === 0 ? (
          // Empty Cart State
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>0 items in Cart</h1>
            <img
              src="https://i.ibb.co/YFLVTQGY/Untitled-design-2.gif" // Replace with your cart GIF
              alt="Empty Cart"
              style={{ width: '300px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Your cart is empty 🙃</p>
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
          </div>
        ) : (
          // Filled Cart State
          <div style={{ display: 'flex', gap: '40px' }}>
            {/* Books List */}
            <div style={{ flex: 2 }}>
              <h1 style={{textAlign:'center', fontSize: '2rem', marginBottom: '20px' }}>{cart.length} items in Cart</h1>
              
              {cart.map((book) => (
                <div
                  key={book.id}
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
        src={book.image} // Unique image for each book
        alt={book.name}
        style={{
          width: '150px', // Smaller size for the container
          height: '225px', // Maintain aspect ratio (380x600 scaled down)
          borderRadius: '10px',
          objectFit: 'cover', // Ensure the image fits nicely
          marginBottom: '15px',
        }}
      />
    

                  {/* Book Details */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{book.name}</h3>
                    <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: {book.author}</p>
                    <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>Price: <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>${book.realprice}</span>  <span style={{ color: 'red' }}>${book.price}</span></p>
                    
                    {/* Quantity Selection */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                      <label htmlFor={`quantity-${book.id}`} style={{ fontSize: '1.2rem' }}>Quantity:</label>
                      <input
                        type="number"
                        id={`quantity-${book.id}`}
                        value={book.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(book.id, parseInt(e.target.value))}
                        style={{
                          width: '60px',
                          padding: '5px',
                          fontSize: '1rem',
                          borderRadius: '5px',
                          border: '1px solid #ccc',
                        }}
                      />
                    </div>
                    

                    {/* Remove from Cart Button */}
                    <button
                      onClick={() => handleRemoveFromCart(book.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        marginTop: '10px',
                        width: 300,
                      }}
                    >
                      Remove from Cart
                    </button>

                    {/* Add to Wishlist Button */}
                    <button
                      onClick={() => handleAddToWishlist(book)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#6a11cb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        marginTop: '10px',
                        marginLeft: '10px',
                        width:300,
                      }}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Details */}
            <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ textAlign:'center', fontSize: '2.0rem', marginBottom: '20px' }}>Bill Details</h2>
              <hr style={{ marginBottom: '20px' }} />

              {/* Book Titles, Quantities, and Prices */}
              {cart.map((book) => (
                <div key={book.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <p style={{ fontSize: '1.2rem' }}>{book.name}</p>
                  <p style={{ fontSize: '1.2rem' }}>{book.quantity} x ${book.price}</p>
                </div>
              ))}

              <hr style={{ marginBottom: '20px' }} />

              {/* Discount */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '1.2rem' }}>Discount</p>
                <p style={{ fontSize: '1.2rem' }}>${discount}</p>
              </div>

              {/* Delivery Charges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '1.2rem' }}>Delivery Charges</p>
                <p style={{ fontSize: '1.2rem' }}>$0.99</p>
              </div>

              <hr style={{ marginBottom: '20px' }} />

              {/* Total Charges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total Charges</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${total.toFixed(2)}</p>
              </div>

              {/* Apply Coupon */}
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Apply Coupon</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Try BOOKS2"
                    style={{
                      flex: 1,
                      padding: '8px',
                      fontSize: '1rem',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#6a11cb',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#6a11cb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;