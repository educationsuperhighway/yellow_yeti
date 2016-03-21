import { SET_BANDWIDTH } from '../actions/bandwidth.js';

export const defaultBandwidthOptions = [
  { value: 56, text: '56 kbps' },
  { value: 100, text: '100 kbps' },
  { value: 1000, text: '1 MBps' },
  { value: 1000000, text: '1 GBps'}
];

export function bandwidth(state, action) {
  if(typeof state === 'undefined') {
    state = 1000
  }

  switch(action.type) {
    case SET_BANDWIDTH:
      return action.bandwidth;
    default:
      return state;
  }
}

export function bandwidthOptions(state) {
  if (typeof state === 'undefined') {
    return defaultBandwidthOptions;
  }
  return state;
}
