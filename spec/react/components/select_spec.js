import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from "enzyme";
import Select from "../../../react/components/select";

describe("<Select/>", () => {
  function wrap(opts = [], onChange = (()=>{})) {
    return shallow(<Select options={opts} onChange={onChange}/>);
  }

  function deep(opts = [], onChange = (()=>{})) {
    return mount(<Select options={opts} onChange={onChange}/>)
  }

  it('has one select box', () => {
    let wrapper = wrap();
    expect(wrapper.find('select').length).to.equal(1);
  });

  it('displays options', () => {
    let opts = [
      { value: '56', text: '56 kb/s' },
      { value: '100', text: '100 kb/s' }
    ];
    let wrapper = deep(opts);
    expect(wrapper.find('option').length).to.equal(3);
  });
});
