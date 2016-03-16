import {
  SET_VIDEO_NODE,
  SET_VIDEO_SOURCE,
  PLAY_VIDEO
} from '../actions/video.js';

export function video(state, action) {
  function path(bw) {
    return '/video?kbps=' + bw;
  }

  switch(action.type) {
    case SET_VIDEO_NODE:
      return action.video;

    case SET_VIDEO_SOURCE:
      state.src = path(action.bandwidth);
      return state;

    case PLAY_VIDEO:
      state.play();
      return state;

    default:
      return state;
  }
}
