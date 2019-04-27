import React from "react";
import { shallow, configure } from "enzyme";
import Tweet from "./Tweet";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("<Tweet>", () => {
  it("should be defined", () => {
    expect(<Tweet />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<Tweet />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Tweet />);
    expect(wrapper).toMatchSnapshot();
  });
});
