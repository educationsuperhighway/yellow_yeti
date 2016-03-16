import { expect } from 'chai';

import {
  setBandwidth
} from '../../../react/actions/bandwidth.js';

import {
  bandwidth,
  bandwidthOptions,
  defaultBandwidthOptions
} from '../../../react/reducers/bandwidth.js';

describe('bandwidthOptions reducer', () => {
  describe('given an undefined state', () => {
    it('returns the default bandwidth options', () => {
      expect(bandwidthOptions()).to.equal(defaultBandwidthOptions);
    });
  });

  describe('given a state', () => {
    it('returns the state', () => {
      let state = 'any state';
      expect(bandwidthOptions(state)).to.equal(state);
    });
  });
});

describe('bandwidth reducer', () => {
  describe('given a SET_BANDWIDTH action', () => {
    it('returns the actions bandwidth', () => {
      let state = 'anything';
      expect(bandwidth(state, setBandwidth(100))).to.equal(100);
    });
  });
  describe('given any other action', () => {
    it('returns the state', () => {
      let state = 1000;
      let action = { type: 'SOME_OTHER_ACTION' };
      expect(bandwidth(state, action)).to.equal(state);
    });
  });
});
