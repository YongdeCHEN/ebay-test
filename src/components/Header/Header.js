import React, { Component } from 'react';
import './Header.css';
import fileImg from '../../assets/file.png';
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

class Header extends Component {
  render() {
    const {title, contentShow, onClick} = this.props;

    return (
      <div className="header-container">
        <div className="header-information">
          <img src={fileImg} className="header-file-image" alt="logo" />
          <span className="header-title" >{title}</span>
        </div>
        <div className="header-coll-expand" onClick={onClick} title="click to collapsible/expandable the page">
          <img src={contentShow?upImg:downImg} className="header-down-image" alt="click to collapsible/expandable the page" />
        </div>
      </div>
    );
  }
}

export default Header;
