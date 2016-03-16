import { START_TIMER, UPDATE_TIMER, STOP_TIMER } from '../actions/timer.js';

export function timer(state, action) {
  function getTime() {
    return new Date().getTime();
  }

  switch(action.type) {
    case START_TIMER:
      let time = getTime();
      return Object.assign({}, state, {
        start: time,
        tick: time,
        running: true
      });

    case UPDATE_TIMER:
      return Object.assign({}, state, {
        tick: getTime()
      });

    case STOP_TIMER:
      return Object.assign({}, state, {
        tick: getTime(),
        running: false
      });

    default:
      return Object.assign({}, state);
  }
}
