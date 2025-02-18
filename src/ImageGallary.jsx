// src/components/ImageGallery.js
import React from 'react';
import './ImageGallary.css';

const images = [
  "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  'https://images.unsplash.com/photo-1739286955038-a4e5ce4f9462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1739289647337-1ac0941621ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1739367156315-22b8ce82b23b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1738940251292-49709608c8aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1738762388748-d19fec9cb0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1738762390183-c18525eb3f8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1732528313074-29427989857f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1739054239615-02944e9c338b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1739054239615-02944e9c338b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1739054239615-02944e9c338b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1738165170747-ecc6e3a4d97c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1738165170747-ecc6e3a4d97c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1737903071772-4d20348b4d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
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
