import React, { Component } from 'react';
import './ProductImage.css';

class ProductImage extends Component {
  render() {
    const { prodImg } = this.props;
    let logo = require('../../assets/ipad-mini.jpg');
    try {
        logo = require('../../assets/' + prodImg);
    }
    catch(e) {
      console.log("Product Image not found. Please check.");
    }

    return (
      <div className="product-image-container">
        <img src={logo} alt="product img" className="product-image" />
      </div>
    );
  }
}

export default ProductImage;