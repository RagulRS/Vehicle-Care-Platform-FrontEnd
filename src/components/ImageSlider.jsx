import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'https://img.freepik.com/free-photo/view-four-wheeled-vehicle-mobility-fast-travel_23-2151016420.jpg?t=st=1726358445~exp=1726362045~hmac=9357c93a99e598c92f4626e6a06b971523a39422b047144a205000b487fd720c&w=1380',
    'https://img.freepik.com/free-photo/view-four-wheeled-vehicle-mobility-fast-travel_23-2151016422.jpg?uid=R163441292&ga=GA1.1.856834063.1726224830&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/view-mini-four-wheel-mobility-vehicle_23-2151016398.jpg?t=st=1726358501~exp=1726362101~hmac=6c9ca4f96393d8827740e47068e2c4d9b5b8bdebb2b2ead4e14bb294e88c6cf9&w=1380',
  ];

  return (
    <div style={{ width: '100%', padding: '10px 0' }}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '400px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
