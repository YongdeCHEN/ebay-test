/**
 * Component name: ProductImage
 * Input props:
 *      prodImg: The url of product image which will be shown on the left side of content box.
 * Functions: Display the product image of a Buying Guide item.
 * Changed History:
 *    Peter Chen       11 Jul 2017     initial version 
 */

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