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
configure({ adapter: new Adapter() });

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
    it('`<input>` element should have a placeholder attribute with value `Name`', () => {
        expect(
            wrapper.find('form').childAt(0).props().placeholder
        ).toBe('Your Screen Name');
    });

    /*it('should render button', () => {
        wrapper.setValue({disabled: false});
        expect(wrapper.find(button)).toHaveLength(1);
    });


Signup.state.signupForm.email.value = "mario@com.com";
    user.simulate('change',event);
    expect(Signup.state.signupForm.email.valid.toBe(true));
    */
});