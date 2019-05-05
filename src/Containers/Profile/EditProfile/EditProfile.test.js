import React from "react";
import { shallow, configure } from "enzyme";
import editProfile from "./EditProfile";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import InputProfile from "../../../Components/UI/InputProfile/InputProfile";

configure({ adapter: new Adapter() });
describe("<editProfile>", () => {
  it("should be defined", () => {
    expect(<editProfile />).toBeDefined();
  });
  it("should render", () => {
    const wrapper = shallow(<editProfile />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<editProfile />);
    expect(wrapper).toMatchSnapshot();
  });

  test("pass a selected value to handleChange handler to handle location", () => {
    const value = "Afghanistan";
    const _handleChange = jest.fn();
    const wrapper = shallow(
      <select onChange={_handleChange} className="form-control" />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find("select").simulate("change", "Afghanistan");

    expect(_handleChange).toBeCalledWith(value);
  });

  //   it("Should update the email value state when an email is given", () => {
  //     const wrapper = shallow(<editProfile />);
  //     const name = "mirna";
  //     const check = wrapper
  //       .find(InputProfile)
  //       .at(0)
  //       .dive()
  //       .find("input");
  //     check.simulate("change", {
  //       target: {
  //         value: name
  //       }
  //     });

  //     expect(wrapper.state().editProfileForm.screen_name.value).toBe(name);
  //   });
});
