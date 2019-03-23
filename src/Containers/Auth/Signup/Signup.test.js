import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Input from "../../../Components/UI/Input/Input";

import Signup from './Signup';
import button from '../../../Components/UI/button/button';
import Spinner from "../../../Components/UI/Spinner/Spinner";
import signup from './Signup';
configure({adapter: new Adapter()});

describe('<Signup />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Signup />);
    });
    it('should render Authnav bar', () => {
        expect(wrapper.find(AuthNav)).toHaveLength(1);
    });

    it('should render button', () => {
        expect(wrapper.find(button)).toHaveLength(1);
    });


});