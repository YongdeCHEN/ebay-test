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