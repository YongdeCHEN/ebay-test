import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import GuideDetail from './GuideDetail';
import ProductImage from '../ProductImage/ProductImage';
import GuideDescription from '../GuideDescription/GuideDescription';

const wrapper = shallow(<GuideDetail />);

it('GuideDetail should contain ProductImage', () => { 
    expect(wrapper.find('ProductImage').text()).toEqual('<ProductImage />');
});

it('GuideDetail should contain GuideDescription', () => { 
    expect(wrapper.find('GuideDescription').text()).toEqual('<GuideDescription />');
});
