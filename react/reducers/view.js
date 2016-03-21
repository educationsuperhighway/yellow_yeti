import {
  SET_SCREEN,
} from '../actions/view.js';

const LIST = [
  'BANDWIDTH_SELECTOR',
  'KILL_SCREEN',
  'VIDEO_PLAYER'
];

export function view(state, action) {
  if(typeof state === 'undefined') {
    state = {
      current: 'BANDWIDTH_SELECTOR',
      list: LIST
    };
  }

  switch(action.type) {
    case SET_SCREEN:
      return Object.assign({}, state, {
        current: action.screen
      });
    default:
      return state;
  }
}
