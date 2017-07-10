import React, { Component } from 'react';

import Header from '../Header/Header';
import GuideDetail from '../GuideDetail/GuideDetail';
import FooterToolbar from '../FooterToolbar/FooterToolbar';
import guideData from '../../data/content.json';

import './BuyingGuide.css';

class BuyingGuide extends Component {

  constructor(props) {
      super(props);
      
      // get the data from JSON file
      let title = "";
      let guideArray = [];
      if (guideData) {
          if (guideData.title) {
              title = guideData.title;
          }
          
          if (guideData.content) {
              guideArray = guideData.content;
          }
      }

      this.state = { 
          title,
          guideArray,
          currentIndex: 0,
          prodImg: "../../assets/ipad-mini.jpg"
      };
  }

  //componentDidMount() {}
  getLeftRightTitle(index, contentArr) {
    let leftTitle="Prev", rightTitle="Next";

    if (contentArr.length > 1) {
      if (index === 0) {
        leftTitle = "Prev";
        rightTitle = contentArr[index+1].title;
      }
      else if ( index >= (contentArr.length - 1) ) {
        leftTitle = contentArr[index-1].title;
        rightTitle = "Next";
      }
      else if (index > 0 && index < (contentArr.length - 1)) {
        leftTitle = contentArr[index-1].title;
        rightTitle = contentArr[index+1].title;
      }
    }

    return { leftTitle, rightTitle };
  }

  render() {
    let guideItem = this.state.guideArray[this.state.currentIndex];

    let {leftTitle, rightTitle} = this.getLeftRightTitle(this.state.currentIndex, this.state.guideArray);

    return (
      <div className="">
        <div className="">
          <Header title={this.state.title} />
          <GuideDetail prodImg={this.state.prodImg} guideItem={guideItem} />
          <FooterToolbar leftTitle={leftTitle} rightTitle={rightTitle} />
        </div>
      </div>
    );
  }
}

export default BuyingGuide;
