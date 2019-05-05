import React from "react";
import { shallow, configure } from "enzyme";
import Profile from "./Profile";
import Nav from "./Profile";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import FanModal from "../../Components/FansBox/Modal/fansModal";
import NovaModal from "../../Components/novaModal/novaModal";

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

  test("render a small label", () => {
    const wrapper = shallow(<a className="referencecolor">Follow</a>);
    expect(wrapper).toMatchSnapshot();
  });
  //   test("pass a selected value to the onChange handler", () => {
  //     const value = true;
  //     const toggleFollowers = jest.fn();
  //     const wrapper = shallow(
  //       <span
  //         onClick={() => {
  //           console.log("hii");
  //           toggleFollowers();
  //         }}
  //       />
  //     );

  //     expect(wrapper).toMatchSnapshot();

  //     wrapper.find("span").simulate("change", true);

  //     expect(toggleFollowers).toBeCalledWith(value);
  //   });

  //   it("updates number of votes", () => {
  //     const wrapper = shallow(<Profile />);

  //     wrapper
  //       .find("span")
  //       .at(1)
  //       .simulate("click");
  //     wrapper.update(); // Read: enzyme update

  //     expect(
  //       wrapper
  //         .find("NovaModal")
  //         .at(0)
  //         .text()
  //     ).toEqual("isOpen=true");
  //   });

  //   test("render a document title", () => {
  //     const wrapper = shallow(<FanModal boxName="Followings" />);
  //     expect(wrapper.prop("boxName")).toEqual("Followings");
  //   });

  // test('render Markdown in preview mode', () => {
  //     const wrapper = shallow(
  //         <a
  //                           aria-controls="novas"
  //                           role="tab"
  //                           data-toggle="tab"
  //                           href="javascript:;"
  //                           onClick={event => this.tabChangedHandler(event, "0")}
  //                         >
  //     );

  //     expect(wrapper).toMatchSnapshot();

  //     wrapper.find('[name="toggle-preview"]').simulate('click');

  //     expect(wrapper).toMatchSnapshot();
  // });
});
