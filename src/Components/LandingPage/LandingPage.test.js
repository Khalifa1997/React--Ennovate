import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import LandingPage from './landingPage';
import { shallowToJson } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<LandingPage\>', () => {
    it('should be defined', () => {
        expect(<LandingPage />).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<LandingPage />)
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    });
    it('should render', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper).toMatchSnapshot()
    });
});