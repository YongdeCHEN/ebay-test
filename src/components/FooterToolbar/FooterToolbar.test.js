import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import FooterToolbar from './FooterToolbar';

const wrapper = shallow(<FooterToolbar />);

it('FooterToolbar should contain img', () => { 
    expect(wrapper.find('img').length).toEqual(2);
});

it('FooterToolbar should contain span', () => { 
    expect(wrapper.find('span').length).toEqual(2);
});

it('FooterToolbar should contain class footer-container', () => { 
    expect(wrapper.find('.footer-container').length).toEqual(1);
});