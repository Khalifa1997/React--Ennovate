import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./Login";

//adding enzyme
configure({ adapter: new Adapter() });

describe("<Login />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Should update the email value state when a username is given", () => {
    const username = "omar@gmail.com";
    const input = wrapper.find("input").at(0);

    input.simulate("change", {
      target: {
        value: username
      }
    });

    expect(wrapper.state().email.value).toBe(username);
  });

  it("Should update the password value state when a username is given", () => {
    const password = "123456789";
    const input = wrapper.find("input").at(1);

    input.simulate("change", {
      target: {
        value: password
      }
    });

    expect(wrapper.state().password.value).toBe(password);
  });

  it("Should update the sentRequest value state when submit button is pressed", () => {
    const sentRequest = true;
    const submit = wrapper.find("button").at(0);

    submit.simulate("click", () => {
      expect(wrapper.state().sentRequest).toBe(sentRequest);
    });
  });

  it("Should not render any invalid-feedback divs", () => {
    if(wrapper.state().email.valid === false && wrapper.state().sentRequest === true){
      expect(wrapper.find("div").hasClass("invalid-feedback")).toHaveLength(1)
    }
  });
});
