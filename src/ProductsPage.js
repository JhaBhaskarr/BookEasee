import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Initialize wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleWishlist = (book) => {
    const isInWishlist = wishlist.some((item) => item.id === book.id);
    let updatedWishlist;

    if (isInWishlist) {
      // Remove from wishlist
      updatedWishlist = wishlist.filter((item) => item.id !== book.id);
      setNotification('Item successfully removed from wishlist');
    } else {
      // Add to wishlist
      updatedWishlist = [...wishlist, book];
      setNotification('Item successfully added to the wishlist');
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Sample data for books
  const books = [
    {
      id: 1,
      name: 'Autobiography of a Yogi',
      author: 'Paramahansa Yogananda',
      realprice: 15.99,
      price: 11.99,
      category: 'Non-Fiction',
      rating: 4.6,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/51t3ERr9-TL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 2,
      name: 'THINK AND GROW RICH',
      author: 'Napoleon Hill',
      realprice: 12.99,
      price: 9.74,
      category: 'Non-Fiction',
      rating: 4.5,
      inStock: true,
      fastDelivery: false,
      image: 'https://m.media-amazon.com/images/I/41o7KAJDfbL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 3,
      name: 'The Hermit (Mafia Empire Book 1)',
      author: 'Michelle Heard',
      realprice: 10.99,
      price: 8.24,
      category: 'Thriller',
      rating: 4.5,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81Idm12STIL._SY466_.jpg', // Unique image URL
    },
    {
      id: 4,
      name: 'How to Win Friends and Influence People',
      author: 'Dale Carnegie',
      realprice: 11.90,
      price: 8.93,
      category: 'Non-Fiction',
      rating: 4.3,
      inStock: true,
      fastDelivery: false,
      image: 'https://m.media-amazon.com/images/I/71XqhBsefqL._SY466_.jpg', // Unique image URL
    },
    {
      id: 5,
      name: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      realprice: 10.95,
      price: 8.21,
      category: 'Non-Fiction',
      rating: 4.6,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/71qRL0+B3xL._SY522_.jpg', // Unique image URL
    },
    {
      id: 6,
      name: `The Magic of Manifesting: 15 Advanced Techniques To Attract Your Best Life, Even If You Think It's Impossible Now (Law of Attraction Book 1)`.length > 20 ? `${`The Magic of Manifesting: 15 Advanced Techniques To Attract Your Best Life, Even If You Think It's Impossible Now (Law of Attraction Book 1)`.substring(0, 20)}...` : `The Magic of Manifesting: 15 Advanced Techniques To Attract Your Best Life, Even If You Think It's Impossible Now (Law of Attraction Book 1)`,
      author: ' Ryuu Shinohara',
      realprice: 13.69,
      price: 10.27,
      category: 'Non-Fictional',
      rating: 4.0,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41j5WMlFBoL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 7,
      name: `How to Become a People Magnet: 62 Life-Changing Tips to Attract Everyone You Meet`.length > 20 ? `${`How to Become a People Magnet: 62 Life-Changing Tips to Attract Everyone You Meet`.substring(0, 20)}...` : `How to Become a People Magnet: 62 Life-Changing Tips to Attract Everyone You Meet`,
      author: 'Mark Reklau',
      realprice: 12.54,
      price: 9.4,
      category: 'Non-Fictional',
      rating: 4.7,
      inStock: true,
      fastDelivery: false,
      image: 'https://m.media-amazon.com/images/I/41+7tuac-KL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 8,
      name: 'Married With Malice',
      author: 'Cora Brent',
      realprice: 14.23,
      price: 10.67,
      category: 'Romance',
      rating: 4.2,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81xvZJHNGwL._SY466_.jpg', // Unique image URL
    },
    {
      id: 9,
      name: 'Speak With No Fear',
      author: 'Mike Acker',
      realprice: 24.09,
      price: 18.07,
      category: 'Non-Fiction',
      rating: 4.7,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/71n2YmGBs0L._SY522_.jpg', // Unique image URL
    },
    {
      id: 10,
      name: 'The YouTube Formula',
      author: ' Derral Eves',
      realprice: 16.50,
      price: 12.38,
      category: 'Non-Fiction',
      rating: 4.7,
      inStock: true,
      fastDelivery: false,
      image: 'https://m.media-amazon.com/images/I/51yTL2snRqL._SY466_.jpg', // Unique image URL
    },
    {
      id: 11,
      name: 'Girl, Alone',
      author: 'Blake Pierce',
      realprice: 28.00,
      price: 21.0,
      category: 'Thriller',
      rating: 4.0,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/810fMTMuZML._SY466_.jpg', // Unique image URL
    },
    {
      id: 12,
      name: 'The Murder of Roger Ackroyd',
      author: 'Agatha Christie',
      realprice: 37.00,
      price: 28.49,
      category: 'Mystery',
      rating: 4.6,
      inStock: true,
      fastDelivery: false,
      image: 'https://m.media-amazon.com/images/I/81PCMuVZJKL._SY522_.jpg', // Unique image URL
    },
    {
      id: 13,
      name: 'Dark Matter',
      author: 'Blake Crouch',
      realprice: 66.00,
      price: 49.5,
      category: 'Sci-Fi',
      rating: 4.4,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/71WYUv7w+bL._SY466_.jpg', // Unique image URL
    },
    {
      id: 14,
      name: 'Beyond the Algorithm: The Awakening',
      author: ' Oliver Dvorzak',
      realprice: 70.50,
      price: 52.88,
      category: 'Sci-Fi',
      rating: 4.9,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/71KDbqTkMFL._SY466_.jpg', // Unique image URL
    },
    {
      id: 15,
      name: 'Harry Potter and the Philosophers Stone',
      author: 'J.K. Rowling',
      realprice: 40.99,
      price: 30.74,
      category: 'Fiction',
      rating: 4.8,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81m9fP+LIPL._SY466_.jpg', // Unique image URL
    },
    {
      id: 16,
      name: 'Enemies With Benefits',
      author: 'Roxie Noir',
      realprice: 26.14,
      price: 19.61,
      category: 'Romance',
      rating: 4.6,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/51JEb8Vir9L._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 17,
      name: 'The Boyfriend: A Psychological Thriller',
      author: 'Anne Frank',
      realprice: 19.69,
      price: 14.77,
      category: 'Thriller',
      rating: 4.3,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41qCraZVJ6L._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 18,
      name: 'The Locked Door',
      author: 'Freida McFadden',
      realprice: 8.0,
      price: 6.0,
      category: 'Sci-Fi',
      rating: 4.7,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41KTgPk0GzL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 19,
      name: 'The Khandavaprastha Conspiracy',
      author: 'Christopher C Doyle',
      realprice: 84.99,
      price: 63.74,
      category: 'Mystery',
      rating: 4.9,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/91qI0Qv7z7L._SY466_.jpg', // Unique image URL
    },
    {
      id: 20,
      name: 'The Complete Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      realprice: 70.00,
      price: 52.5,
      category: 'Mystery',
      rating: 4.7,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41yULQbXhvL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 21,
      name: 'The Silent Patient',
      author: 'Anne Frank',
      realprice: 30.40,
      price: 22.8,
      category: 'Thriller',
      rating: 4.9,
      inStock: true,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81y9uCHoxrL._SY466_.jpg', // Unique image URL
    },
    {
      id: 22,
      name: 'Never Lie',
      author: ' Freida McFadden',
      realprice: 20.60,
      price: 15.45,
      category: 'Fiction',
      rating: 4.4,
      inStock: false,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41oCesFWhdL._SY445_SX342_.jpg', // Unique image URL
    },
    {
      id: 23,
      name: 'Why I am an Atheist',
      author: 'Bhagat Singh',
      realprice: 58.50,
      price: 43.88,
      category: 'Non-Fiction',
      rating: 5.0,
      inStock: false,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81Ylh4qNAZL._SY466_.jpg', // Unique image URL
    },
    {
      id: 24,
      name: 'Atomic Habits',
      author: ' James Clear',
      realprice: 62.00,
      price: 46.50,
      category: 'Non-Fiction',
      rating: 4.9,
      inStock: false,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/81IL8Dy4vmL._SY466_.jpg', // Unique image URL
    },
    {
      id: 25,
      name: 'So Not My Thing',
      author: 'Melanie Jacobson',
      realprice: 15.60,
      price: 11.70,
      category: 'Romance',
      rating: 4.9,
      inStock: false,
      fastDelivery: true,
      image: 'https://m.media-amazon.com/images/I/41FETCCDwzL._SY445_SX342_.jpg', // Unique image URL
    },

    // Add more books with unique image URLs
  ];
  
    // Add more books here (total 21 books)

  // Filter and sort books
  const filteredBooks = books
    .filter((book) => {
      return (
        book.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        book.price >= priceRange[0] &&
        book.price <= priceRange[1] &&
        (selectedCategory ? book.category === selectedCategory : true) &&
        (selectedRating ? book.rating >= selectedRating : true) &&
        (includeOutOfStock ? true : book.inStock) &&
        (fastDeliveryOnly ? book.fastDelivery : true)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'priceLowToHigh') return a.price - b.price;
      if (sortBy === 'priceHighToLow') return b.price - a.price;
      return 0;
    });

  // Pagination logic
  const booksPerPage = 12;
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceRangeChange = (e, newValue) => {
    setPriceRange(newValue);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 100]);
    setSelectedCategory('');
    setSelectedRating('');
    setSortBy('');
    setIncludeOutOfStock(false);
    setFastDeliveryOnly(false);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
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
        {/* Website Name and Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {/* Website Name (Clickable) */}
          <div
            style={{ fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => {
              navigate('/'); // Redirect to the dashboard page
            }}
          >
            BookEase
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            style={{
              width: '300px',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
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

      {/* Main Content */}
      <div style={{ marginTop: '80px', flex: 1, display: 'flex', padding: '20px' }}>
        {/* Filter Container */}
        <div style={{ width: '250px', marginRight: '30px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Filters</h3>

          {/* Clear Filters Button */}
          <button
            onClick={handleClearFilters}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#6a11cb',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Clear Filters
          </button>

          {/* Price Range Slider */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Price Range</h4>
            <input
              type="range"
              min={0}
              max={100}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              style={{ width: '100%' }}
            />
            <p style={{ fontSize: '1rem', color: '#555' }}>${priceRange[0]} - ${priceRange[1]}</p>
          </div>

          {/* Category Selection */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Category</h4>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>

          {/* Rating Selection */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Rating</h4>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">All Ratings</option>
              <option value="4.5">4.5 & above</option>
              <option value="4">4 & above</option>
              <option value="3">3 & above</option>
              <option value="2">2 & above</option>
              <option value="1">1 & above</option>
            </select>
          </div>

          {/* Sort By Selection */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Sort By</h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="">None</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Include Out of Stock Products */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1rem', color: '#555' }}>
              <input
                type="checkbox"
                checked={includeOutOfStock}
                onChange={(e) => setIncludeOutOfStock(e.target.checked)}
                style={{ marginRight: '10px' }}
              />
              Include Out of Stock
            </label>
          </div>

          {/* Fast Delivery Only */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1rem', color: '#555' }}>
              <input
                type="checkbox"
                checked={fastDeliveryOnly}
                onChange={(e) => setFastDeliveryOnly(e.target.checked)}
                style={{ marginRight: '10px' }}
              />
              Fast Delivery Only
            </label>
          </div>
        </div>

        {/* Product Display Section */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Showing {filteredBooks.length} Products</h3>

          {/* Book Containers */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 3 books per row
    gap: '20px',
  }}
>
  {currentBooks.map((book) => (
    <div
      key={book.id}
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
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
                  color: wishlist.some((item) => item.id === book.id) ? '#ff4757' : '#ccc', // Change color if in wishlist
                }}
                onClick={() => handleWishlist(book)}
              >
                ❤️
              </button>
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
      

      {/* Book Title */}
      <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{book.name}</h4>

      {/* Book Author */}
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>Author: {book.author}</p>

      {/* Book Price */}
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>Price: <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>${book.realprice}</span>  <span style={{ color: 'red' }}>${book.price}</span></p>
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

      

      {/* Hidden Fields (Rating, Fast Delivery, In Stock, Category) */}
      <div style={{ display: 'none' }}>
        <p>Rating: {book.rating}</p>
        <p>Fast Delivery: {book.fastDelivery ? 'Yes' : 'No'}</p>
        <p>In Stock: {book.inStock ? 'Yes' : 'No'}</p>
        <p>Category: {book.category}</p>
      </div>
    </div>
  ))}
</div>

{/* Popup Notification */}
{notification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#6a11cb',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {notification}
        </div>
      )}

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                style={{
                  padding: '10px 15px',
                  backgroundColor: currentPage === index + 1 ? '#6a11cb' : '#f8f9fa',
                  color: currentPage === index + 1 ? 'white' : '#555',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  margin: '0 5px',
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;