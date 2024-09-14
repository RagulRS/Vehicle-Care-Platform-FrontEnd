import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PeriodicMaintenance.css"; 
import Header from "./Header"; 
import Footer from "./Footer";
import config from './config';
import carBrandsData from '../data/carBrands.json';
import baseServiceChargesData from '../data/baseServiceCharges.json';
import brandServiceChargesData from '../data/brandServiceCharges.json';
import serviceData from '../data/generalService.json'; 


const PeriodicMaintenance = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [serviceCharges, setServiceCharges] = useState(baseServiceChargesData);
  const [cart, setCart] = useState([]);
  const [addingService, setAddingService] = useState(null);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setServiceCharges(brandServiceChargesData[brand] || baseServiceChargesData);
  };

  const handleServiceClick = (serviceKey, price) => {
    const serviceInCart = cart.find((item) => item.serviceKey === serviceKey);
    
    if (serviceInCart) {
 
      setCart(cart.filter((item) => item.serviceKey !== serviceKey));
    } else {
    
      setCart([...cart, { serviceKey, price }]);
    }

    setAddingService(serviceKey);
    setTimeout(() => {
      setAddingService(null);
    }, 2000);
  };


  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handlePayment = async () => {
    const totalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
  
    const response = await fetch(`${config.apiUrl}/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalAmount }),
    });
  
    const data = await response.json();
  
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // There is a problem in creating in Razor pay account they asked for a website link and i added but still it takes them tym to approve
      amount: data.amount,
      currency: data.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: data.id, 
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Ragul Singh D",
        email: "ragulsingh6245@example.com",
        contact: "6383251292",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <Header /> 
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4">Periodic Maintenance Services</h1>
          <div>
            <select
              className="form-select"
              onChange={handleBrandChange}
              value={selectedBrand}
            >
              <option value="">Select Car Brand</option>
              {carBrandsData.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-4">
          
          <div className="col-md-6">
            <h2 className="display-5">General Service</h2>
            <img
              src={serviceData.generalService.imageUrl}
              alt="General Service"
              className="img-fluid mb-2 rounded shadow"
            />
            <ul>
              {serviceData.generalService.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Price:</strong> ${serviceData.generalService.price}
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() =>
                handleServiceClick("General Service", serviceData.generalService.price)
              }
            >
              {cart.find((item) => item.serviceKey === "General Service")
                ? "Remove from Cart"
                : addingService === "General Service"
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>

          <div className="col-md-6">
            <h2 className="display-5">Full Car Service</h2>
            <img
              src={serviceData.fullCarService.imageUrl}
              alt="Full Car Service"
              className="img-fluid mb-2 rounded shadow"
            />
            <ul>
              {serviceData.fullCarService.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Price:</strong> ${serviceData.fullCarService.price}
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() =>
                handleServiceClick("Full Car Service", serviceData.fullCarService.price)
              }
            >
              {cart.find((item) => item.serviceKey === "Full Car Service")
                ? "Remove from Cart"
                : addingService === "Full Car Service"
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        </div>

        <h2 className="display-5">Available Services</h2>
        <div className="row">
          {Object.keys(serviceCharges).map((serviceKey) => (
            <div className="col-md-4 mb-3" key={serviceKey}>
              <div className="card shadow-sm">
                
                <div className="card-body">
                  <h5 className="card-title">{serviceKey}</h5>
                  <p className="card-text">{`Price: $${serviceCharges[serviceKey]}`}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleServiceClick(serviceKey, serviceCharges[serviceKey])
                    }
                  >
                    {cart.find((item) => item.serviceKey === serviceKey)
                      ? "Remove from Cart"
                      : addingService === serviceKey
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-section mt-5">
  <h2 className="display-5">Cart</h2>
  {cart.length > 0 ? (
    <div>
      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.serviceKey}
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <h4>Total: ${totalPrice}</h4>
        <button onClick={handlePayment} className="btn-checkout">
          Proceed to Pay ${totalPrice}
        </button>
      </div>
    </div>
  ) : (
    <p>No items in the cart.</p>
  )}
</div>

      </div>
      <Footer />
    </div>
  );
};

export default PeriodicMaintenance;
