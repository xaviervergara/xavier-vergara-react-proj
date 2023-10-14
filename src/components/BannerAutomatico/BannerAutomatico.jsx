import React, { useState, useEffect } from 'react';
import './BannerAutomatico.css';
import imagen1 from '../../assets/fotografia_q-bing/foto_1.jpg';
import imagen2 from '../../assets/fotografia_q-bing/foto_2.jpg';
import imagen3 from '../../assets/fotografia_q-bing/foto_3.jpg';

const images = [imagen1, imagen2, imagen3];

function BannerAutomatico() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-container">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="banner-slide">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerAutomatico;
