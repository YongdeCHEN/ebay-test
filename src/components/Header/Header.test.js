import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from './Header';

const wrapper = shallow(<Header />);

it('Header should contain img', () => { 
    expect(wrapper.find('img').length).toEqual(2);
});

it('Header should contain span', () => { 
    expect(wrapper.find('span').length).toEqual(1);
});

it('Header should contain class .header-container', () => { 
    expect(wrapper.find('.header-container').length).toEqual(1);
});