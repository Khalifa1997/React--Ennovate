import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Login from "./Login";
import { checkValidity } from './Login';

//adding enzyme
configure({ adapter: new Adapter() });

describe("<Login />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("should render 1 AuthNav forms", () => {
    //wrapper.setProps({propname:value})
    expect(wrapper.find(AuthNav)).toHaveLength(1);
  });

  //checks for the starting states of the component
  it("should have a false sent request" , () => {
    expect(wrapper.state('sentRequest')).toBe(false);
    expect(wrapper.state('token')).toBe("");
  })

  it('should do what I like', () => {
    expect(checkValidity('orange@gmail.com',)).toMatchSnapshot();
  })
});
