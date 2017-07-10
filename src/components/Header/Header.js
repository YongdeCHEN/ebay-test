import React, { Component } from 'react';
import './Header.css';
import fileImg from '../../assets/file.png';
import upImg from '../../assets/up.png';
import downImg from '../../assets/up.png';

class Header extends Component {
  render() {
    const {title} = this.props;
    return (
      <div className="header-container">
        <div className="header-information">
        <img src={fileImg} className="header-file-image" alt="logo" />
        <span className="header-title" >{title}</span>
        </div>
        <div className="header-coll-expand">
        <img src={downImg} className="header-down-image" alt="click to collapsible/expandable the page" />
        </div>
      </div>
    );
  }
}

export default Header;
