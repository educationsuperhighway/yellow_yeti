import { expect } from 'chai';
import sinon from 'sinon';

import {
  startTimer,
  updateTimer,
  stopTimer,
} from '../../../react/actions/timer.js';

import { timer, timerDefaults } from '../../../react/reducers/timer.js';


describe('timer reducer function', () => {
  let clock;

  before(() => {
    clock = sinon.useFakeTimers();
  });

  after(() => {
    clock.restore();
  });

  describe('given a START_TIMER action', () => {
    let output;

    before(() => {
      let action = startTimer();
      output = timer(undefined, action);
    });

    it('returns an object with start, tick, and on values', () => {
      expect(output).to.have.property('start');
      expect(output).to.have.property('tick');
      expect(output).to.have.property('running');
    });

    it('sets the start and tick to the current time', () => {
      let time = new Date().getTime();
      expect(output.start).to.equal(time);
      expect(output.tick).to.equal(time);
    });

    it('sets running to true', () => {
      expect(output.running).to.equal(true);
    });
  });

  describe('given an UPDATE_TIMER action', () => {
    let output;

    before(() => {
      let prevState = timer(undefined, startTimer());
      clock.tick(1000);
      output = timer(prevState, updateTimer());
    });

    it('returns an object with start, tick, and on values', () => {
      expect(output).to.have.property('start');
      expect(output).to.have.property('tick');
      expect(output).to.have.property('running');
    });

    it('sets the tick property to the current time', () => {
      let expectedTick = new Date().getTime();
      expect(output.tick).to.equal(expectedTick);
    });
  });

  describe('given a STOP_TIMER action', () => {
    let output;

    before(() => {
      let prevState = timer(undefined, startTimer());
      clock.tick(2000);
      output = timer(prevState, stopTimer());
    });

    it('sets the tick property to the current time', () => {
      let expectedTick = new Date().getTime();
      expect(output.tick).to.equal(expectedTick);
    });

    it('sets running to false', () => {
      expect(output.running).to.equal(false);
    });
  });

  describe('given any other action', () => {
    it('returns the state', () => {
      let state = { name: 'existing state' };
      let action = { type: 'ANY_OTHER_ACTION' };
      expect(timer(state, action)).to.deep.equal(state);
    });
  });
});
