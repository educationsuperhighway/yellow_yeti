import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CurrentBandwidth from '../../../react/components/current_bandwidth.jsx';

describe("<CurrentBandwidth/>", () => {
  function wrap(text) {
    return shallow(<CurrentBandwidth text={text}/>)
  }

  it('renders the expected text', () => {
    let node = wrap('100 kbps');
    expect(node.text()).to.equal("Current bandwidth: 100 kbps");
  });

  it('renders an empty span when no text is provided', () => {
    let node = wrap();
    expect(node.html()).to.equal('<span></span>');
  });
});
