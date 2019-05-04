import React from "react";
import { shallow, configure } from "enzyme";
import Profile from "./Profile";
import Nav from "./Profile";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("<Profile>", () => {
  it("should be defined", () => {
    expect(<Profile />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<Profile />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});
