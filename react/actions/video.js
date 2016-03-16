export const SET_VIDEO_SOURCE = 'SET_VIDEO_SOURCE';
export function setVideoSource(bandwidth) {
  return {
    type: SET_VIDEO_SOURCE, bandwidth
  }
}

export const PLAY_VIDEO = 'PLAY_VIDEO';
export function playVideo() {
  return {
    type: PLAY_VIDEO
  }
}

export const SET_VIDEO_NODE = 'SET_VIDEO';
export function setVideoNode(video) {
  return {
    type: SET_VIDEO_NODE, video
  }
}
