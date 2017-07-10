import React, { Component } from 'react';
import './ProductImage.css';
import logo from '../../assets/ipad-mini.jpg';

class ProductImage extends Component {

  render() {
    const { prodImg } = this.props;
    //var logo = require(this.props.prodImg);

    return (
      <div className="product-image-container"> 
        <img src={logo} alt="product img" className="product-image" />
      </div>
    );
  }
}

export default ProductImage;