import { expect, assert } from 'chai';
import sinon from 'sinon';

import {
  START_TIMER,
  UPDATE_TIMER,
  STOP_TIMER,
  startTimer,
  updateTimer,
  stopTimer,
  initializeTimer
} from '../../../react/actions/timer.js';

import {
  timer
} from '../../../react/reducers/timer.js';

describe('startTimer', () => {
  it('returns the START_TIMER action', () => {
    let action = startTimer();
    expect(action.type).to.equal(START_TIMER);
  });
});

describe('updateTimer', () => {
  it('returns the UPDATE_TIMER action', () => {
    let action = updateTimer();
    expect(action.type).to.equal(UPDATE_TIMER);
  });
});

describe('stopTimer', () => {
  it('returns the STOP_TIMER action', () => {
    let action = stopTimer();
    expect(action.type).to.equal(STOP_TIMER);
  });
});

// Async Action for dispatching timer updates on a given interval
// https://github.com/gaearon/redux-thunk
describe('initializeTimer', () => {
  let clock;

  before(() => {
    clock = sinon.useFakeTimers();
  });

  after(() => {
    clock.restore();
  });

  it('returns a function for deferred execution', () => {
    expect(typeof initializeTimer()).to.equal('function');
  });

  describe('the deferred function', () => {
    let fn, interval, dispatch;

    before(() => {
      interval = 100;
      fn = initializeTimer(interval);
      dispatch = sinon.spy();
    });

    it('dispatches a START_TIMER action when run', () => {
      fn(dispatch, (() => {}));
      assert(dispatch.calledWith(startTimer()));
    });

    describe('when the timer is running', () => {
      let state, getState;

      before(() => {
        state = { videoTimer: timer(undefined, startTimer()) };
        getState = () => { return state; };
      });

      it('dispatches an UPDATE_TIMER action at the given interval', () => {
        fn(dispatch, getState);
        clock.tick(interval);
        assert(dispatch.calledWith(updateTimer()));
      });
    });

    describe('when the timer has been stopped', () => {
      let state, getState;

      before(() => {
        let prevTimer = timer(undefined, startTimer());
        state = { videoTimer: timer(prevTimer, stopTimer()) };
        getState = () => { return state; };
      });

      it('dispatches a STOP_TIMER action', () => {
        fn(dispatch, getState);
        clock.tick(interval);
        assert(dispatch.calledWith(stopTimer()));
      });
    });
  });
});

