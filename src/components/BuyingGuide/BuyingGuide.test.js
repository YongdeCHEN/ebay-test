import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BuyingGuide from './BuyingGuide';
import Header from '../Header/Header';
import GuideDetail from '../GuideDetail/GuideDetail';
import FooterToolbar from '../FooterToolbar/FooterToolbar';

const wrapper = shallow(<BuyingGuide />);

it('should contain BuyingGuide', () => {
    expect(wrapper.contains("BuyingGuide")).toEqual(true);
});
