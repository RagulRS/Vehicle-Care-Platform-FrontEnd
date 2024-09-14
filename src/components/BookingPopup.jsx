// src/components/BookingPopup.js
import React, { useState } from 'react';
import './BookingPopup.css';

const BookingPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState(''); // New state for date

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      phone,
      service,
      date, // Include date in formData
    };

    try {
      const response = await fetch('http://localhost:3001/book-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service booked successfully!');
        onClose();
      } else {
        alert('Failed to book service. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Book a Service</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <label>
            Service:
            <select value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="">Select a service</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Repair">Repair</option>
              <option value="Diagnostics">Diagnostics</option>
            </select>
          </label>
          <label>
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
