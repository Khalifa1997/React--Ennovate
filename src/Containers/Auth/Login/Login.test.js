import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Login from "./Login";

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
});
