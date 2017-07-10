import React, { Component } from 'react';
import './FooterToolbar.css';
import leftImg from '../../assets/left.png';
import rightImg from '../../assets/right.png';

class FooterToolbar extends Component {
  render() {
    const {leftTitle, rightTitle} = this.props;
    return (
      <div className="footer-container">
        <div className="left-link">
          <img src={leftImg} className="left-image" alt="goto previous page" />
          <span className="left-title" >{leftTitle}</span>
        </div>
        <div className="right-link">
          <span className="right-title" >{rightTitle}</span>
          <img src={rightImg} className="right-image" alt="goto next page" />
        </div>
      </div>
    );
  }
}

export default FooterToolbar;