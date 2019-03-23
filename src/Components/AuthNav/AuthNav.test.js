import React from 'react';
import { shallow, configure } from 'enzyme';
import authNav from './AuthNav';
import { shallowToJson } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('<AuthNav\>', () => {
    it('should be defined', () => {
        expect(<authNav />).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<authNav />)
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    });
    it('should render', () => {
        const wrapper = shallow(<authNav />)
        expect(wrapper).toMatchSnapshot()
    });
});