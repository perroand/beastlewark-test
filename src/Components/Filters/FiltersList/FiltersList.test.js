import React from "react";
import { shallow } from "enzyme";
import FiltersList from "./";

describe("<FiltersList />", () => {
  const values = {
    hairColor: ["blue", "green"],
    professions: ["Mason", "Cook", "Baker"],
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FiltersList selected={{}} values={values} />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render expected number of buttons for hair color", () => {
    const buttons = wrapper.find('Button[tag="hairColor"]');
    expect(buttons).toHaveLength(2);
  });

  it("should render expected number of buttons for professions", () => {
    const buttons = wrapper.find('Button[tag="professions"]');
    expect(buttons).toHaveLength(3);
  });

  it("should call props.click when clicking a filter button", () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <FiltersList click={spy} selected={{}} values={values} />
    );
    const buttons = wrapper.find("Button");
    buttons.at(0).props().click();

    expect(spy).toBeCalled();
  });
});
