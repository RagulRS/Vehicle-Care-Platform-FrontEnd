import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart } from './features/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './Products.css'; 

const products = [
    {
      id: 1,
      name: "Car Cover",
      category: "Exterior",
      price: 29.99,
      description: "Durable and weather-resistant car cover to protect your vehicle from elements.",
      brand: "AutoGuard",
      imageUrl: "https://m.media-amazon.com/images/I/71lvCE3itBL._SL1500_.jpg" 
    },
    {
      id: 2,
      name: "Dash Cam",
      category: "Electronics",
      price: 99.99,
      description: "High-definition dash cam with night vision and parking mode.",
      brand: "SecureDrive",
      imageUrl: "https://m.media-amazon.com/images/I/51WX3HJZE1L._SL1000_.jpg" 
    },
    {
      id: 3,
      name: "Leather Seat Covers",
      category: "Interior",
      price: 159.99,
      description: "Premium leather seat covers that enhance comfort and style.",
      brand: "LuxAuto",
      imageUrl: "https://m.media-amazon.com/images/I/61XFYT3aTTL.jpg"
    },
    {
      id: 4,
      name: "Bluetooth Adapter",
      category: "Electronics",
      price: 24.99,
      description: "Bluetooth adapter for hands-free calls and wireless audio streaming.",
      brand: "SoundLink",
      imageUrl: "https://m.media-amazon.com/images/I/61GyKtSld+L._SL1500_.jpg" 
    },
    {
      id: 5,
      name: "All-Weather Floor Mats",
      category: "Interior",
      price: 49.99,
      description: "Heavy-duty floor mats designed to handle all weather conditions.",
      brand: "WeatherShield",
      imageUrl: "https://m.media-amazon.com/images/I/61HorODYNCL._SL1379_.jpg" 
    },
    {
      id: 6,
      name: "Portable Jump Starter",
      category: "Safety",
      price: 79.99,
      description: "Compact and powerful jump starter with built-in flashlight and USB charging.",
      brand: "PowerBoost",
      imageUrl: "https://m.media-amazon.com/images/I/51PloQUSKGL._SL1000_.jpg" 
    },
    {
      id: 7,
      name: "Trunk Organizer",
      category: "Interior",
      price: 39.99,
      description: "Adjustable trunk organizer to keep your cargo area neat and tidy.",
      brand: "CargoMate",
      imageUrl: "https://m.media-amazon.com/images/I/816yH0grvdL._SL1500_.jpg" 
    },
    {
      id: 8,
      name: "Sunshade",
      category: "Exterior",
      price: 19.99,
      description: "Reflective sunshade to keep your car interior cool and protected from UV rays.",
      brand: "ShadeGuard",
      imageUrl: "https://m.media-amazon.com/images/I/7179DJ3NUaL._SL1500_.jpg" 
    },
    {
      id: 9,
      name: "Rearview Mirror Camera",
      category: "Electronics",
      price: 129.99,
      description: "Rearview mirror with built-in camera for enhanced driving safety.",
      brand: "ViewSafe",
      imageUrl: "https://m.media-amazon.com/images/I/71P7RNjQPLL._SL1500_.jpg" 
    },
    {
      id: 10,
      name: "Roof Rack",
      category: "Exterior",
      price: 199.99,
      description: "Sturdy roof rack for additional storage and cargo carrying capacity.",
      brand: "RidgeLine",
      imageUrl: "https://m.media-amazon.com/images/I/31DB4HBe6GL.jpg" 
    }
  ];


const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };


  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (minPrice === '' || product.price >= minPrice) &&
      (maxPrice === '' || product.price <= maxPrice) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Products</h1>

       
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-2"
          />
          <div className="d-flex justify-content-between mb-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select me-2"
            >
              <option value="All">All Categories</option>
              <option value="Exterior">Exterior</option>
              <option value="Electronics">Electronics</option>
              <option value="Interior">Interior</option>
              <option value="Safety">Safety</option>
            </select>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="form-control me-2"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.imageUrl} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                  <p className="card-text">{product.description}</p>
                  <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  {cart.cartItems.find(item => item.id === product.id) ? (
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDecreaseCart(product)}
                      >
                        -
                      </button>
                      <span>{cart.cartItems.find(item => item.id === product.id).quantity}</span>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAddToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
