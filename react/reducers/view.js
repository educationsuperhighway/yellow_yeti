import {
  SHOW_KILL_SCREEN,
  SHOW_VIDEO_PLAYER,
  SHOW_BANDWIDTH_SELECTOR,
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
    case SHOW_VIDEO_PLAYER:
      return Object.assign({}, state, {
        current: 'VIDEO_PLAYER'
      });
    case SHOW_KILL_SCREEN:
      return Object.assign({}, state, {
        current: 'KILL_SCREEN'
      });
    case SHOW_BANDWIDTH_SELECTOR:
      return Object.assign({}, state, {
        current: 'BANDWIDTH_SELECTOR'
      });
    case SET_SCREEN:
      return Object.assign({}, state, {
        current: action.screen
      });
    default:
      return state;
  }
}
