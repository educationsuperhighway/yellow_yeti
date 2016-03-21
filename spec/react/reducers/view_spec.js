import { expect } from 'chai';
import sinon from 'sinon';

import {
  setScreen,
} from '../../../react/actions/view.js';

import {
  view,
} from '../../../react/reducers/view.js';


describe('view reducer', () => {
  describe('default', () => {
    it('returns the default view state', () => {
      let output = view(undefined, { type: 'anything' });
      expect(output).to.deep.equal({
        current: 'BANDWIDTH_SELECTOR',
        list: [
          'BANDWIDTH_SELECTOR',
          'KILL_SCREEN',
          'VIDEO_PLAYER'
        ]
      });
    });
  });
});
