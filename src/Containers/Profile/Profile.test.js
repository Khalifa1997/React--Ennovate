import React from "react";
import { shallow, configure } from "enzyme";
import profile from "./Profile";
import Profile from "./Profile";
import Adapter from "enzyme-adapter-react-16";
import { wrap } from "module";
configure({ adapter: new Adapter() });
const wrapper = shallow(<profile />);
describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists(".container")).to.equal(true);
  });
});
