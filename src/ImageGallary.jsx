// src/components/ImageGallery.js
import React from 'react';
import './ImageGallary.css';

const images = [
  "./images/img1.webp",
  "./images/img2.webp",
  "./images/img3.webp",
  "./images/img4.webp",
  "./images/img5.webp",
  "./images/img6.webp",
  "./images/img7.webp",
  "./images/img1.webp",
  "./images/img2.webp",
  "./images/img1.webp",
  "./images/img2.webp",
  "./images/img3.webp",
  "./images/img4.webp",
  "./images/img5.webp",
  "./images/img6.webp",
  "./images/img7.webp",
  "./images/img1.webp",
  "./images/img2.webp",
];

const ImageGallery = () => {

  return (
    <>
    <h1>Shubham Kumar Maurya</h1>
    <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
