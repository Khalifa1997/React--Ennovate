import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Profile from "./Profile";
import Nav from "../../Components/NavBar/NavBar";
configure({ adapter: new Adapter() });

describe("<Profile />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });
  it("should render image", () => {
    expect(wrapper.find("Nav")).toHaveLength(1);
  });
});
