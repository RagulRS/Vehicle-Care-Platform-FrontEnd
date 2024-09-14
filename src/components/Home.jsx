import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BookingPopup from '../components/BookingPopup';
import Notification from '../components/Notification'; 
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleBookServiceClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };


  

  const showNotification = (message) => {
    setNotification(message);
  };

  const showServiceReminder = () => {
    showNotification('Your service period is going to end. Please service your car ASAP.');
  };

  useEffect(() => {
    showServiceReminder();
  }, []);

  const handleAddReview = () => {
    if (rating > 0 && comment.trim()) {
      const newReview = { rating, comment };
      setReviews([newReview, ...reviews]);
      setRating(0);
      setComment('');
    }
  };

  return (
    <div className="home-container">
      <Header />

      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}

      <ImageSlider />
      
      <div className="hero-section">
        <h1>Welcome to Vehicle Care Platform</h1>
        <p>Your trusted partner for vehicle maintenance and repair.</p>
        <button className="cta-button" onClick={handleBookServiceClick}>Book a Service</button>
      </div>

      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img 
              src="https://img.freepik.com/free-photo/3d-morph-man-builder-with-wrench_1048-14179.jpg?t=st=1726345505~exp=1726349105~hmac=62ea50df0548d54cb6985f04ced6f0f38a5b550d087322f06455541333d76e19&w=740" 
              alt="Maintenance" 
            />
            <h3>Maintenance</h3>
            <p>Scheduled maintenance for optimal performance.</p>
          </div>
          <div className="service-card">
            <img 
              src="https://e7.pngegg.com/pngimages/175/671/png-clipart-illustration-of-vehicle-and-parts-car-automobile-repair-shop-transport-service-%C5%8Cmoto-car-repair-car-accident-vintage-car.png" 
              alt="Repair" 
            />
            <h3>Repair</h3>
            <p>Quick and reliable repair services.</p>
          </div>
          <div className="service-card">
            <img 
              src="https://img.freepik.com/premium-vector/car-diagnostics-icon-vector-illustration_757387-5191.jpg" 
              alt="Diagnostics" 
            />
            <h3>Diagnostics</h3>
            <p>State-of-the-art vehicle diagnostics.</p>
          </div>
        </div>
      </div>

      <div className="featured-services-section">
        <h2>Featured Services</h2>
        <div className="featured-services">
          <div className="featured-service">
            <img 
              src="https://www.pngitem.com/pimgs/m/201-2017607_oil-change-service-logo-hd-png-download.png" 
              alt="Oil Change" 
            />
            <h3>Oil Change</h3>
            <p>High-quality oil change services to keep your engine running smoothly.</p>
          </div>
          <div className="featured-service">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/025/169/354/original/wheel-alignment-icon-design-vector.jpg" 
              alt="Tire Rotation" 
            />
            <h3>Tire Rotation</h3>
            <p>Ensure even tire wear and extend the life of your tires.</p>
          </div>
          <div className="featured-service">
            <img 
              src="https://img.freepik.com/premium-vector/vector-design-alignment-icon-style_822882-248763.jpg?semt=ais_hybrid" 
              alt="Brake Service" 
            />
            <h3>Brake Service</h3>
            <p>Comprehensive brake inspections and repairs for your safety.</p>
          </div>
        </div>
      </div>

      <div className="special-offers-section">
        <h2>Special Offers</h2>
        <div className="special-offers">
          <div className="special-offer">
            <h3>Winter Check-Up</h3>
            <p>Get a free winter check-up with any major service. Ensure your car is ready for the cold weather!</p>
          </div>
          <div className="special-offer">
            <h3>10% Off on First Visit</h3>
            <p>New customers receive 10% off their first service. Book now to take advantage!</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For inquiries or to schedule a service, contact us at:</p>
        <p><strong>Email:</strong> ragulsingh6245@gmail.com</p>
        <p><strong>Phone:</strong> (+91) 6383251292</p>
        <p><strong>Address:</strong> 5/119D3, Cheran Nagar, Mettupalayam - 641301</p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What services do you offer?</h3>
          <p>We offer a wide range of services including maintenance, repair, diagnostics, oil change, tire rotation, and more.</p>
        </div>
        <div className="faq-item">
          <h3>How can I book a service?</h3>
          <p>You can book a service by clicking the "Book a Service" button on our homepage or by calling us directly.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer any warranties on your services?</h3>
          <p>Yes, we offer warranties on many of our services. Please inquire for more details during your service appointment.</p>
        </div>
      </div>

      <div className="review-container">
        <h3>Share your experience</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleAddReview(); }}>
          <div className="rating-section">
            <label>Rating:</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="0">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="comment-section">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>

     
      <div className="review-list">
        <h2>Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to leave a review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review-item">
              <strong>Rating:</strong> {review.rating}/5
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>

      <Footer />

      <BookingPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default Home;
