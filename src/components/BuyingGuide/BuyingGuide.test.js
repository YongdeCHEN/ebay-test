import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BuyingGuide from './BuyingGuide';
import Header from '../Header/Header';
import GuideDetail from '../GuideDetail/GuideDetail';
import FooterToolbar from '../FooterToolbar/FooterToolbar';

const wrapper = shallow(<BuyingGuide />);

it('BuyingGuide should contain Header', () => { 
    expect(wrapper.find('Header').text()).toEqual('<Header />');
});

it('BuyingGuide should contain GuideDetail', () => { 
    expect(wrapper.find('GuideDetail').text()).toEqual('<GuideDetail />');
});

it('BuyingGuide should contain FooterToolbar', () => { 
    expect(wrapper.find('FooterToolbar').text()).toEqual('<FooterToolbar />');
});

