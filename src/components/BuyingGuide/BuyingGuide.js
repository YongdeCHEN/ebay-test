/**
 * Component name: BuyingGuide
 * Input parameters:
 *      content.json: the json data which will be showed on the page.
 * Functions: The entrance of whole application. 
 *        In this component, it will read the data from json file and pass them as props in sub components.
 *        It also defined the functions which will calculate the content of Header, Content Box and Footer Toolbar.
 * Changed History:
 *    Peter Chen       11 Jul 2017     initial version 
 */

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
      let prodImgName = "ipad-mini.jpg";
      let guideArray = [];
      if (guideData) {
          if (guideData.title) {
              title = guideData.title;
          }
          
          if (guideData.content) {
              guideArray = guideData.content;

              if (guideArray.length > 0 && guideArray[0].thumbnail) {
                prodImgName = guideArray[0].thumbnail;
              }
          }
      }

      // stored the content in state
      this.state = { 
          title,
          guideArray,
          currentIndex: 0,
          prodImg: prodImgName,
          contentShow: true
      };
  }

  // get the left and right title in Footer Toolbar
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

  // collapsible or expandable the content box by setting the variable 'contentShow'
  toggleCollExpand = () => {
    this.setState({
      contentShow: !(this.state.contentShow)
    });
  }

  // goto previous page when "Prev" button is clicked
  onClickPrev = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: (this.state.currentIndex - 1)
      });
    }
  }

  // goto next page when "Next" button is clicked
  onClickNext = () => {
    if (this.state.currentIndex < (this.state.guideArray.length - 1)) {
      this.setState({
        currentIndex: (this.state.currentIndex + 1)
      });
    }
  }

  render() {
    let guideItem = this.state.guideArray[this.state.currentIndex];
    // check whether guideItem is null. Set a default value to it when it is null.
    if (!guideItem) {
      guideItem = {description: ""};
    }

    // get the left and right title in Footer Toolbar
    let {leftTitle, rightTitle} = this.getLeftRightTitle(this.state.currentIndex, this.state.guideArray);
 
    return (
      <div className="buying-guide-container" >
          <Header title={this.state.title} contentShow={this.state.contentShow} onClick={this.toggleCollExpand} />
          <div className="buying-guide-content" style={{display: (this.state.contentShow?"":"none")}} >
            <GuideDetail prodImg={this.state.prodImg} guideItem={guideItem} />
            <FooterToolbar 
                leftTitle={leftTitle} 
                rightTitle={rightTitle}
                onClickPrev={this.onClickPrev} 
                onClickNext={this.onClickNext} />
          </div>
      </div>
    );
  }
}

export default BuyingGuide;
