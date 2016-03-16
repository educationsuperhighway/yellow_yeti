import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { video } from './reducers/video.js';
import { bandwidth, bandwidthOptions } from './reducers/bandwidth.js';
import { timer } from './reducers/timer.js';

function bandwidthApp(state = {}, action) {
  return {
    bandwidthOptions: bandwidthOptions(state.bandwidthOptions, action),
    bandwidth: bandwidth(state.bandwidth, action),
    video: video(state.video, action),
    videoTimer: timer(state.videoTimer, action)
  }
}

const logger = createLogger();
const dataStore = createStore(
  bandwidthApp,
  applyMiddleware(thunk, promise, logger)
);

export default dataStore;
