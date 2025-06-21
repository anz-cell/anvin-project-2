import React from 'react';
import './CSS/ImageGallery.css';
import { assets } from '../assets/assets';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <h2 className="image-gallery-title">Image Gallery</h2>

      {/* Top Section */}
      <div className="gallery-top">
        <div className="main-image">
          <img src={assets.Image_1} alt="Main" />
        </div>
        <div className="side-images">
          <img src={assets.Image_2} alt="Side 1" />
          <img src={assets.Image_3} alt="Side 2" />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-images">
        <img src={assets.Image_4} alt="Bottom 1" className="img4" />
        <img src={assets.Image_5} alt="Bottom 2" className="img5" />
        <img src={assets.Image_6} alt="Bottom 3" className="img6" />

        {/* You can add more here if needed */}
      </div>
    </div>
  );
};

export default ImageGallery;
