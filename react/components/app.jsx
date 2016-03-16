import React from 'react';
import SelectBandwidth from '../containers/bandwidth_selector.jsx';
import BandwidthSentence from '../containers/bandwidth_sentence.jsx';
import ActiveVideoPlayer from '../containers/video_player.jsx';

const App = () => (
  <div className="row video-row">
    <div className="row bandwidth-filter">
      <div className="col-md-2"></div>
      <SelectBandwidth />
      <div className="col-md-2"></div>
    </div>
    <div className="row">
      <BandwidthSentence />
    </div>
    <div className="row" id="video-row">
      <ActiveVideoPlayer />
    </div>
  </div>
);

export default App
