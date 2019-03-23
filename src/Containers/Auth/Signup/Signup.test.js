import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Input from "../../../Components/UI/Input/Input";

import Signup from './Signup';
import button from '../../../Components/UI/button/button';
import Spinner from "../../../Components/UI/Spinner/Spinner";
import signup from './Signup';
import input from '../../../Components/UI/Input/Input';
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
    
    it('should render input', () => {
        //wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(Input)).toHaveLength(5);
    });
   
    it("Should check that placeholder of email is correct", () => {
        //const email = "mirna@hbd.ehbf";
        const input = wrapper.find("input").at(2);
    
    expect(wrapper.state().signupForm.email.elementConfig.placeholder).toBe("Your E-Mail");
});


});
