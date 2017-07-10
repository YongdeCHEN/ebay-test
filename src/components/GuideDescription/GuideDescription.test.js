import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import GuideDescription from './GuideDescription';

let guideItem={description: "text"};
const wrapper = shallow(<GuideDescription guideItem={guideItem} />);

it('GuideDescription should contain p', () => { 
    expect(wrapper.find('p').length).toEqual(1);
});

it('GuideDescription should contain class description-container', () => { 
    expect(wrapper.find('.description-container').length).toEqual(1);
});