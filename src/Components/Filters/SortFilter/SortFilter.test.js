import React from "react";
import { shallow } from "enzyme";
import SortFilter from "./";

describe("<SortFilter />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SortFilter />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should call props.sort on input change", () => {
    const spy = jest.fn();
    const wrapper = shallow(<SortFilter sort={spy} />);
    const sortInput = wrapper.find("select");
    const event = { target: { value: "test" } };

    sortInput.simulate("change", event);
    expect(spy).toBeCalledWith(event);
  });
});
