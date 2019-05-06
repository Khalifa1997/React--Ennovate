import React from "react";
import { shallow, configure, mount } from "enzyme";
import Newsfeed from "./Newsfeed";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import ProfileCard from "../../Components/profileCard/profileCard";
import NovaModal from "../../Components/novaModal/novaModal";
import Nav from "../../Components/NavBar/NavBar";
configure({ adapter: new Adapter() });
describe("<editProfile>", () => {
  it("should be defined", () => {
    expect(<Newsfeed />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<Newsfeed />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Newsfeed />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<NovaModal />);
    expect(wrapper).toMatchSnapshot();
  });

  it("check the type of value", () => {
    //const wrapper = shallow(<Nav />);
    const props = {
      notifcationsCount: "2"
    };
    const wrapper = shallow(<Nav {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
