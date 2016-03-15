import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from "enzyme";
import SelectBandwidth from "../../../react/components/select_bandwidth"

describe("<SelectBandwidth/>", () => {
  function wrap() {
    return shallow(<SelectBandwidth/>);
  }

  it('has two select boxes', () => {
    let wrapper = wrap();
    expect(wrapper.find('select').length).to.equal(2);
  });
});
