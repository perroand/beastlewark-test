import React from "react";
import { shallow } from "enzyme";
import PopulationList from "./";

describe("<PopulationList />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PopulationList />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
