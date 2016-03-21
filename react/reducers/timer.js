import { START_TIMER, UPDATE_TIMER, STOP_TIMER } from '../actions/timer.js';

export const timerDefaults = {
  running: false
};

export function timer(state, action) {
  if(typeof state === 'undefined') {
    state = timerDefaults;
  }

  function elapsed(start, tick) {
    return tick - start;
  }

  let time = new Date().getTime();

  switch(action.type) {
    case START_TIMER:
      return Object.assign({}, state, {
        start: time,
        tick: time,
        running: true
      });

    case UPDATE_TIMER:
      return Object.assign({}, state, {
        tick: time,
        elapsed: elapsed(state.start, time)
      });

    case STOP_TIMER:
      return Object.assign({}, state, {
        tick: time,
        elapsed: elapsed(state.start, time),
        running: false
      });

    default:
      return Object.assign({}, state);
  }
}
