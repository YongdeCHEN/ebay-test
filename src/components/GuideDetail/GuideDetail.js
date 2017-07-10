/**
 * Component name: GuideDetail
 * Input props:
 *      prodImg: The url of product image which will be shown on the left side of content box.
 *      guideItem: The item which will be showed on the content box.
 * Functions: Display the product image and description of each Buying Guide item.
 * Changed History:
 *    Peter Chen       11 Jul 2017     initial version 
 */

import React, { Component } from 'react';
import './GuideDetail.css';

import ProductImage from '../ProductImage/ProductImage';
import GuideDescription from '../GuideDescription/GuideDescription';

class GuideDetail extends Component {
  render() {
    const { prodImg, guideItem } = this.props;
    return (
      <div className="guide-detail-container"> 
        <ProductImage prodImg={prodImg} />
        <GuideDescription guideItem={guideItem} />
      </div>
    );
  }
}

export default GuideDetail;
