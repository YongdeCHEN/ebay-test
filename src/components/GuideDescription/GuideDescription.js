/**
 * Component name: GuideDescription
 * Input props:
 *      guideItem: the item which will be showed on the content box.
 * Functions: Display the description of each Buying Guide item.
 * Changed History:
 *    Peter Chen       11 Jul 2017     initial version 
 */

import React, { Component } from 'react';
import './GuideDescription.css';

class GuideDescription extends Component {

  render() {
    const { guideItem } = this.props;
    return (
      <div className="description-container">
        <p className="description-text" dangerouslySetInnerHTML={{__html: guideItem.description}} />
      </div>
    );
  }
}

export default GuideDescription;