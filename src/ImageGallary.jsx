// src/components/ImageGallery.js
import React from 'react';
import './ImageGallary.css';

const images = [
  "./image/img1.jpg",
  "./image/img2.jpg",
  "./image/img3.jpg",
  "./image/img4.jpg",
  "./image/img5.jpg",
  "./image/img6.jpg",
  "./image/img7.jpg",
  "./image/img1.jpg",
  "./image/img2.jpg",
  "./image/img1.jpg",
  "./image/img2.jpg",
  "./image/img3.jpg",
  "./image/img4.jpg",
  "./image/img5.jpg",
  "./image/img6.jpg",
  "./image/img7.jpg",
  "./image/img1.jpg",
  "./image/img2.jpg",
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
