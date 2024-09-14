// src/components/Header.js
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Vehicle Care Platform</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/periodicmaintenance">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/maintenancehistory">Maintenance History</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/cart" className="btn btn-light me-3">
              <i className="bi bi-cart"></i>
            </Link>
            <Link to='/login' className="btn btn-light">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
