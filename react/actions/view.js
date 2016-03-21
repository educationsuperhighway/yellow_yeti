export const SHOW_BANDWIDTH_SELECTOR = 'SHOW_BANDWIDTH_SELECTOR';
export function showBandwidthSelector() {
  return {
    type: SHOW_BANDWIDTH_SELECTOR
  }
}

export const SHOW_VIDEO_PLAYER = 'SHOW_VIDEO_PLAYER';
export function showVideoPlayer() {
  return {
    type: SHOW_VIDEO_PLAYER
  }
}

export const SHOW_KILL_SCREEN = 'SHOW_KILL_SCREEN';
export function showKillScreen() {
  return {
    type: SHOW_KILL_SCREEN
  }
}

export const SET_SCREEN = 'SET_SCREEN';
export function setScreen(screen) {
  return {
    type: SET_SCREEN, screen
  }
}
