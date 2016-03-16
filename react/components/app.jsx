import React from 'react';
import SelectBandwidth from '../containers/bandwidth_selector.jsx';
import BandwidthSentence from '../containers/bandwidth_sentence.jsx';
import ActiveVideoPlayer from '../containers/video_player.jsx';

const App = () => (
  <div>
    <SelectBandwidth />
    <BandwidthSentence />
    <ActiveVideoPlayer />
  </div>
);

export default App
