import React, { Component } from 'react';
import './GuideDetail.css';

import ProductImage from '../ProductImage/ProductImage';
import GuideDescription from '../GuideDescription/GuideDescription';

class GuideDetail extends Component {
  render() {
    const { prodImg, guideItem } = this.props;
    return (
      <div className="guide-detail-container">
        <ProductImage className="" prodImg={prodImg} />
        <GuideDescription className="" guideItem={guideItem} />
      </div>
    );
  }
}

export default GuideDetail;
