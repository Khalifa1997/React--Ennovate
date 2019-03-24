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
    const screenname = "mirna";
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

  it("Should update the re-enter password value state when a password is given", () => {
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
    const username = "mirna";
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

  it("Should update the email value state when an email is given", () => {
    const email = "mirna";
    const check = wrapper
      .find(Input)
      .at(2)
      .dive()
      .find("input");
    check.simulate("change", {
      target: {
        value: email
      }
    });

    expect(wrapper.state().signupForm.email.value).toBe(email);
  });

  it("Should update the password value state when a password is given", () => {
    const password = "mirna";
    const check = wrapper
      .find(Input)
      .at(3)
      .dive()
      .find("input");
    check.simulate("change", {
      target: {
        value: password
      }
    });

    expect(wrapper.state().signupForm.password.value).toBe(password);
  });

  it("check that email is valid", () => {
    const email = "mirna@gmail.com";
    const check = wrapper
      .find(Input)
      .at(2)
      .dive()
      .find("input");
<<<<<<< HEAD

    const validation = { required: true, email: true };
    checkValidity(username, validation);
=======
    check.simulate("change", {
      target: {
        value: email
      }
    });
>>>>>>> 84acfe1ae7b11d524b01d45763be23958c6c4101

    expect(wrapper.state().signupForm.email.valid).toBe(true);
  });

  it("Should check that password is valid", () => {
    const password = "123456";
    const check = wrapper
      .find(Input)
      .at(3)
      .dive()
      .find("input");
      check.simulate("change", {
        target: {
          value: password
        }
      });
    expect(wrapper.state().signupForm.password.valid).toBe(false);
  });

  it("Should check that screenname does not start with a letter", () => {
    const screenname = "1hatem";
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
    expect(wrapper.state().signupForm.screenname.valid).toBe(false);
  });

  it("check if screenname is missing", () => {
    const screenname = "";
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
    expect(wrapper.state().signupForm.screenname.valid).toBe(false);
  });
});
