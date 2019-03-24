import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Input from "../../../Components/UI/Input/Input";

import Signup from "./Signup";
import button from "../../../Components/UI/button/button";
import Spinner from "../../../Components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });

describe("<Signup />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });
  it("should render Authnav bar", () => {
    expect(wrapper.find(AuthNav)).toHaveLength(1);
  });

  it("should render button", () => {
    expect(wrapper.find(button)).toHaveLength(1);
  });

  it("should render input", () => {
    //wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(Input)).toHaveLength(5);
  });

  it("Should check that placeholder of email is correct", () => {
    //const email = "mirna@hbd.ehbf";
    const Input = wrapper.find("Input").at(2);

    expect(wrapper.state().signupForm.email.elementConfig.placeholder).toBe(
      "Your E-Mail"
    );
  });

  it("Should update the screenname value state when a screenname is given", () => {
    const screenname = "hvjjhvj";
    const check = wrapper
      .find(Input)
      .at(0)
      .dive()
      .find("input");

    check.simulate("change", {
      target: {
        value: screenname
      }
    });

    expect(wrapper.state().signupForm.screenname.value).toBe(screenname);
  });

  it("Should update the password value state when a password is given", () => {
    const reenterpass = "12345678";
    const check = wrapper
      .find(Input)
      .at(4)
      .dive()
      .find("input");

    check.simulate("change", {
      target: {
        value: reenterpass
      }
    });

    expect(wrapper.state().signupForm.reenter.value).toBe(reenterpass);
  });

  it("Should update the username value state when a username is given", () => {
    const username = "hvjjhvj";
    const check = wrapper
      .find(Input)
      .at(1)
      .dive()
      .find("input");
    check.simulate("change", {
      target: {
        value: username
      }
    });

    expect(wrapper.state().signupForm.username.value).toBe(username);
  });
  it("Should update the email value state when a username is given", () => {
    const username = "hbjb@hvbj.ub";
    const check = wrapper
      .find(Input)
      .at(2)
      .dive()
      .find("input");
    check.simulate("change", {
      target: {
        value: username
      }
    });

    expect(wrapper.state().signupForm.email.valid).toBe(true);
  });

  it("Should update the email value state when a username is given", () => {
    const username = "hbjb@hvbj.ub";
    const check = wrapper
      .find(Input)
      .at(2)
      .dive()
      .find("input");
    const validation = { required: true, email: true };
    wrapper.checkValidity(username, validation);

    expect(wrapper.state().signupForm.email.valid).toBe(true);
  });
});
