import React, { Component } from 'react';
import './FooterToolbar.css';
import leftImg from '../../assets/left.png';
import rightImg from '../../assets/right.png';

/**
 * Component name: FooterToolbar
 * Input props:
 *      leftTitle: The title of left Nav on the Footer Toolbar
 *      rightTitle: The title of right Nav on the Footer Toolbar
 *      onClickPrev: The function when the "left Nav" was clicked
 *      onClickNext: The function when the "right Nav" was clicked
 * Functions: Display the Footer Toolbar. There are two nav functions in the toolbar.
 *   when the left title was clicked, the content of page above will be changed accordingly.
 * Changed History:
 *    Peter Chen       11 Jul 2017     initial version 
 */

class FooterToolbar extends Component {
  render() {
    const {leftTitle, rightTitle, onClickPrev, onClickNext} = this.props;
    return (
      <div className="footer-container">
        <div className="left-link" onClick={onClickPrev} title={"go to '" + leftTitle + "'"} >
          <img src={leftImg} className="left-image" alt="goto previous page" />
          <span className="left-title" >{leftTitle}</span>
        </div>
        <div className="right-link"  onClick={onClickNext} title={"go to '" + rightTitle + "'"} >
          <span className="right-title" >{rightTitle}</span>
          <img src={rightImg} className="right-image" alt="goto next page" />
        </div>
      </div>
    );
  }
}

export default FooterToolbar;