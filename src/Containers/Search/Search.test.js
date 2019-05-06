import React from "react";
import { shallow, configure } from "enzyme";
import Search from "./Search";
import Nav from "../../Components/NavBar/NavBar";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import ProfileSearch from "../../Components/profileSearch/profileSearch";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
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
  it("check that props are send correctly to profile search", () => {
    //const wrapper = shallow(<Nav />);
    const props = {
      key: "123",
      name: "mirna",
      username: "mirna",
      text: "ana mirna",
      profile_image_url: "hhttp:///123354"
    };
    const wrapper = shallow(<ProfileSearch {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("check that props are send correctly to css transition", () => {
    //const wrapper = shallow(<Nav />);
    const props = {
      key: "123",
      timeout: "500",
      classNames: "scroll"
    };
    const wrapper = shallow(<CSSTransition {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
