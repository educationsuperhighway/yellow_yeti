import {
  UPDATE_VIDEO_STATUS,
} from '../actions/video.js';

export function videoStatus(state, action) {
  switch(action.type) {
    case UPDATE_VIDEO_STATUS:
      return action.status;
    default:
      return state;
  }
}

export default videoStatus;
