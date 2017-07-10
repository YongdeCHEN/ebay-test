import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ProductImage from './ProductImage';

const wrapper = shallow(<ProductImage />);

it('ProductImage should contain img', () => { 
    expect(wrapper.find('img').length).toEqual(1);
});

it('ProductImage should contain class .product-image-container', () => { 
    expect(wrapper.find('.product-image-container').length).toEqual(1);
});