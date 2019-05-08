import React from "react";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import { getMaxListeners } from "cluster";

configure({ adapter: new Adapter() });
describe("<login>", () => {
  it("should be defined", () => {
    expect(<Login />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<Login />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  afterAll(() => setTimeout(() => process.exit(), 1000));
  // test("sets loading state to true on save press", () => {
  //   const onChangeHandler = jest.fn();
  //   const wrapper = shallow(
  //  <Login/>
  //   );

  //   wrapper.find('exampleInputEmail1').simulate("click");
  //   expect(wrapper.state("modalShownFans")).toEqual(true);
  // });

  //   it("should respond to change event and change the state of the Login Component", () => {
  //     const wrapper = shallow(<Login />);
  //     wrapper.find("exampleInputEmail1").simulate("change", {
  //       target: { value: "blah@gmail.com" }
  //     });
  //     expect(wrapper.state("email")).toEqual("blah@gmail.com");
  //   });
});
