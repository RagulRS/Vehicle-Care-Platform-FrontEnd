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
    'https://img2.wallspic.com/crops/8/8/6/9/4/149688/149688-black_car_in_a_parking_lot-7680x4320.jpg',
    'https://img2.wallspic.com/crops/0/0/7/6/2/126700/126700-bmw-sports_car-sportscar-auto_part-wheel-7680x4320.jpg',
    'https://img1.wallspic.com/crops/4/2/5/4/6/164524/164524-ford_gt-2020_chicago_auto_show-ford_motor_company-ford-ford_gt40-7680x4320.jpg',
  ];

  return (
    <div style={{ width: '100%', padding: '10px 0' }}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
