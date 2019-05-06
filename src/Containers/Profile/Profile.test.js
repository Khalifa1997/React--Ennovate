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

  // test("sets loading state to true on save press", () => {
  //     // const toggleFans = jest.fn();
  //     const wrapper = shallow(
  //    <Profile/>
  //     );
  
  //     wrapper.find('[id="1"]').simulate("click");
  //     expect(wrapper.state("modalShownFans")).toEqual(true);
  //   });



  // test("render a document title", () => {
  //   const wrapper = shallow(<FanModal boxName="Followings" />);
  //   expect(wrapper.prop("boxName")).toEqual("Followings");
  // });

  // it("should render", () => {
  //   const wrapper = shallow(<Profile />);
  //   expect(
  //     wrapper.find("button").hasClass("btn profilebtn profile-edit-btn")
  //   ).to.equal(true);
  // });
  // it("should call the onClick function when 'Subtract' button is clicked when the operator is '-'", () => {
  //   const wrapper = shallow(<Profile />);
  //   wrapper.setProps("1");
  //   const deleteClicked = jest.fn();
  //   wrapper.instance().deleteNovaHandler = deleteClicked;
  //   wrapper.find("deleteClicked").onClick();
  //   expect(deleteClicked).toHaveBeenCalledTimes(1);
  // });
  // 
  // it("should render 1 <menu>s", () => {
  //   const wrapper = shallow(<menu>
  //     <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
  //       {novas}
  //     </TransitionGroup>
  //   </menu> );
  //   expect(wrapper.find("menu")).toHaveLength(1);
  // });

  // test("toggle followers", () => {
  //   const value = 12;
  //   const reNovaHandler = jest.fn();
  //   const wrapper = shallow(
  //     <button
  //     className="btn btn-success profilebtn profile-edit-btn"
  //     onClick={this.follow}
  //   />
  //   );

  //   expect(wrapper).toMatchSnapshot();

  //   wrapper.find("span").simulate("change", false);

  //   expect(toggleFollowers).toBeCalledWith(true);
  // });



});
