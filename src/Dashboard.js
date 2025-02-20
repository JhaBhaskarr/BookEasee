import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };
  if (!loggedInUser) {
    navigate('/login'); // Redirect to login if not logged in
    return null;
  }
  

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
      window.location.href = '/'; // Redirect to the dashboard page
    }}
  >
    BookEase
  </div>

  {/* Navigation Links */}
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <Link to="/products" style={{ textDecoration: 'none', color: 'white', fontSize: '1.1rem' }}>
      Products
    </Link>
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

      {/* Hero Section */}
      <div
        style={{
          marginTop: '100px', // To account for the fixed header
          height: '600px', // Increased height
          backgroundColor: '#f8f9fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("https://images2.alphacoders.com/261/thumb-1920-26102.jpg")', // Updated hero image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Discover Your Next Favorite Book</h1>
          <p style={{ fontSize: '1.8rem' }}>Explore a world of stories and adventures.</p>
        </div>
      </div>

      {/* Genre Section */}
<div style={{ padding: '60px 40px', backgroundColor: '#fff' }}>
  <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Genres</h2>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    }}
  >
    {[
      { name: 'Fiction', path: '/genre/fiction' },
      { name: 'Non-Fiction', path: '/genre/non-fiction' },
      { name: 'Mystery', path: '/genre/mystery' },
      { name: 'Sci-Fi', path: '/genre/sci-fi' },
      { name: 'Romance', path: '/genre/romance' },
      { name: 'Thriller', path: '/genre/thriller' },
    ].map((genre) => (
      <div
        key={genre.name}
        style={{
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer', // Add pointer cursor
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
        }}
        onClick={() => {
          // Redirect to the respective genre page
          window.location.href = genre.path;
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)'; // Lift effect on hover
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'; // Enhanced shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'; // Reset on hover out
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Reset shadow on hover out
        }}
      >
        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{genre.name}</h3>
        <p style={{ color: '#555', fontSize: '1.2rem' }}>Explore the best books in {genre.name}.</p>
      </div>
    ))}
  </div>
</div>

      {/* New Arrivals Section */}
<div style={{ padding: '60px 40px', backgroundColor: '#f8f9fa' }}>
  <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>New Arrivals</h2>
  <div
    style={{
      display: 'flex',
      overflowX: 'auto',
      gap: '30px',
      paddingBottom: '30px',
      scrollbarWidth: 'thin', // Custom scrollbar for Firefox
      scrollbarColor: '#6a11cb #f8f9fa', // Custom scrollbar for Firefox
    }}
    className="custom-scrollbar" // Custom scrollbar for Chrome/Safari
  >
    {/* Book 1 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/816DPd8HNBL._SY466_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`Harry Potter and the Order of the Phoenix`.length > 20 ? `${`Harry Potter and the Order of the Phoenix`.substring(0, 20)}...` : `Harry Potter and the Order of the Phoenix`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: J.K. Rowling</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 2 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/51AKk9NTPBL._SY445_SX342_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`How to Win Friends and Influence People`.length > 20 ? `${`How to Win Friends and Influence People`.substring(0, 20)}...` : `How to Win Friends and Influence People`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author:  Dale Carnegie</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 3 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/91GlYFs3+5L._SY466_.jpg"
        alt="Book 2"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`The Wrong Bride: Ares and Raven's Story (The Windsors)`.length > 20 ? `${`The Wrong Bride: Ares and Raven's Story (The Windsors)`.substring(0, 20)}...` : `The Wrong Bride: Ares and Raven's Story (The Windsors)`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author:  Catharina Maura</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$12.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$9.74</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 4 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/51AhJaXS+JL._SY445_SX342_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`The Wrong Daughter: The jaw-dropping international SENSATION with a killer twist by Dandy Smith`.length > 20 ? `${`The Wrong Daughter: The jaw-dropping international SENSATION with a killer twist by Dandy Smith`.substring(0, 20)}...` : `The Wrong Daughter: The jaw-dropping international SENSATION with a killer twist by Dandy Smith`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author:  Dandy Smith</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 5 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/51KKbhcTRIL._SY445_SX342_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`Amazing Spider-Man Masterworks Vol. 5 (Marvel Masterworks)`.length > 20 ? `${`Amazing Spider-Man Masterworks Vol. 5 (Marvel Masterworks)`.substring(0, 20)}...` : `Amazing Spider-Man Masterworks Vol. 5 (Marvel Masterworks)`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: F. Stan Lee </p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 6 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/51T0ERik9HL._SY445_SX342_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`Two Twisted Crowns: the instant NEW YORK TIMES and USA TODAY bestseller (The Shepherd King)`.length > 20 ? `${`Two Twisted Crowns: the instant NEW YORK TIMES and USA TODAY bestseller (The Shepherd King)`.substring(0, 20)}...` : `Two Twisted Crowns: the instant NEW YORK TIMES and USA TODAY bestseller (The Shepherd King)`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author:  Rachel Gillig</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Book 7 */}
    <div
      style={{
        flex: '0 0 auto',
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // For positioning tags and buttons
      }}
    >
      {/* New Arrival Tag */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#6a11cb',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '0.8rem', // Smaller font size
          fontWeight: 'bold', // Bold text
        }}
      >
        New Arrival
      </div>

      {/* Wishlist Button */}
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
        }}
      >
        ❤️
      </button>

      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/41d9QKZK+UL._SY445_SX342_.jpg"
        alt="Book 1"
        style={{ width: '100%', borderRadius: '10px' }}
      />

      {/* Book Title (Limited to 20 characters) */}
      <h3 style={{ fontSize: '1.5rem', margin: '15px 0' }}>
        {`Fake It 'til You Make It: A laugh-out-loud, fake-dating romantic comedy from Laura Carter`.length > 20 ? `${`Fake It 'til You Make It: A laugh-out-loud, fake-dating romantic comedy from Laura Carter`.substring(0, 20)}...` : `Fake It 'til You Make It: A laugh-out-loud, fake-dating romantic comedy from Laura Carter`}
      </h3>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1.2rem' }}>Author: Laura Carter</p>

      {/* Book Price with Discount */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#555', fontSize: '1.2rem', textDecoration: 'line-through' }}>$15.99</p>
        <p style={{ color: '#6a11cb', fontSize: '1.2rem', fontWeight: 'bold' }}>$11.99</p>
      </div>

      {/* Discount Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
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
    </div>

    {/* Repeat for Book 3 to Book 6 with similar structure */}
  </div>
</div>

      {/* Footer Section */}
<div
  style={{
    padding: '40px 20px', // Decreased padding to reduce height
    backgroundColor: '#6a11cb',
    color: 'white',
    textAlign: 'center',
  }}
>
  <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>BookEase</h2>
  <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>Explore the world of books with us.</p>

  {/* Footer Links */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '400px', // Increased gap between sections
      marginTop: '20px',
    }}
  >
    {/* About Us Section */}
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>About Us</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><Link to="/contact-us" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Contact Us</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/about-us" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>About Us</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/careers" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Careers</Link></li>
        <li><Link to="/gift-cards" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Gift Cards</Link></li>
      </ul>
    </div>

    {/* Help Section */}
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Help</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><Link to="/payments" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Payments</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/shipping" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Shipping</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/cancellation-returns" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Cancellation & Returns</Link></li>
        <li><Link to="/faqs" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>FAQs</Link></li>
      </ul>
    </div>

    {/* Socials Section */}
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Socials</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>LinkedIn</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>GitHub</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Instagram</a></li>
        <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>X</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
  );
};

export default Dashboard;