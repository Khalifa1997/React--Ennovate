import React from "react";
import { shallow, configure, mount } from "enzyme";
import Profile from "./Profile";
import Nav from "./Profile";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "../../Components/UI/Spinner/Spinner";
import FanModal from "../../Components/FansBox/Modal/fansModal";
import NovaModal from "../../Components/novaModal/novaModal";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";

configure({ adapter: new Adapter() });
describe("<Profile>", () => {
  it(" profile should be defined", () => {
    expect(<Profile />).toBeDefined();
  });
  it("profile should render", () => {
    const wrapper = shallow(<Profile />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it(" profile should render", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<TransitionGroup />);
    expect(wrapper).toMatchSnapshot();
  });

  test("render a small label", () => {
    const wrapper = shallow(<a className="referencecolor">Follow</a>);
    expect(wrapper).toMatchSnapshot();
  });
  it("check the image", () => {
    //const wrapper = shallow(<Nav />);
    const props = {
      className: "imgwidth",
      src: "hhtp:/13234"
    };
    const wrapper = shallow(<img {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("check Nova modal", () => {
    //const wrapper = shallow(<Nav />);
    const toggle = jest.fn();
    const props = {
      isOpen: true,
      toggle: toggle(),
      modalType: true
    };
    const wrapper = shallow(<NovaModal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("render css transition", () => {
    const toggleFans = jest.fn();
    const props = {
      key: 123,
      timeout: 500,
      classNames: "move"
    };
    const wrapper = shallow(<CSSTransition {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // test("sets loading state to true on save press", () => {
  //     // const toggleFans = jest.fn();
  //     const wrapper = shallow(
  //    <Profile/>
  //     );

  //     wrapper.find('[id="1"]').simulate("click");
  //     expect(wrapper.state("modalShownFans")).toEqual(true);
  //   });

  // it("should call the onClick function when 'Subtract' button is clicked when the operator is '-'", () => {
  //   const wrapper = shallow(<Profile />);
  //   wrapper.setProps("1");
  //   const deleteClicked = jest.fn();
  //   wrapper.instance().deleteNovaHandler = deleteClicked;
  //   wrapper.find("deleteClicked").onClick();
  //   expect(deleteClicked).toHaveBeenCalledTimes(1);
  // });
  afterAll(() => setTimeout(() => process.exit(), 1000));
});
