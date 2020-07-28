import React from "react";
import { shallow } from "enzyme";
import SearchFilter from "./";

describe("<PopulationList />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchFilter />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should call props.search on input change", () => {
    const spy = jest.fn();
    const wrapper = shallow(<SearchFilter search={spy} />);
    const searchInput = wrapper.find("input");
    const event = { target: { value: "em" } };

    searchInput.simulate("change", event);
    expect(spy).toBeCalledWith(event);
  });
});
