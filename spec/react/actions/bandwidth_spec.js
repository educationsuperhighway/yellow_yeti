import { expect } from 'chai';
import { SET_BANDWIDTH, setBandwidth } from '../../../react/actions/bandwidth.js';

describe('setBandwidth', () => {
  it('returns a SET_BANDWIDTH action with the given value', () => {
    let action = setBandwidth(100);
    expect(action.type).to.equal(SET_BANDWIDTH);
    expect(action.bandwidth).to.equal(100);
  });
});
