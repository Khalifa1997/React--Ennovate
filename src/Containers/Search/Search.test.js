import React from "react";
import { shallow, configure } from "enzyme";
import Search from "./Search";
import Nav from "../../Components/NavBar/NavBar";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("<editProfile>", () => {
  it("should be defined", () => {
    expect(<Search />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<Search />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
  // it("check the type of value", () => {
  //    //const wrapper = shallow(<Nav />);
  //   const props = {
  //     key="123",
  //     name="mirna",
  //     username="mirna",
  //     text="ana mirna",
  //     profile_image_url="hhttp:///123354"
  //     };
  //     wrapper = shallow(<ProfileSearch {...props} />);
  //   expect(wrapper.prop(" notifcationsCount")).toequal("2");
  // });
});
