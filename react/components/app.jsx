import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import SelectBandwidth from '../containers/bandwidth_selector.jsx';
import BandwidthSentence from '../containers/bandwidth_sentence.jsx';
import ActiveVideoPlayer from '../containers/active_video_player.jsx';
import ActiveVideoInfo from '../containers/active_video_info.jsx';

class App extends Component {
  static propTypes = {
    videoTimer: PropTypes.object.isRequired
  };

  videoStarted() {
    return this.props.videoTimer.running && !this.props.videoTimer.ended
  }

  videoEnded() {
    return this.props.videoTimer.ended;
  }

  videoPlaying() {
    return this.props.videoTimer.running;
  }

  bandwidthFilter() {
    return classNames("bandwidth-filter", "row", {
      hidden: this.videoPlaying() || this.videoEnded()
    });
  }

  videoRow() {
    return classNames("row", {
      hidden: !(this.videoPlaying() || this.videoEnded())
    })
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className={this.bandwidthFilter()}>
          <div className="col-xs-2"></div>
          <SelectBandwidth />
          <div className="col-xs-2"></div>
        </div>
        <div className={this.videoRow()}>
          <BandwidthSentence />
        </div>
        <div className={this.videoRow()} id="video-row">
          <ActiveVideoPlayer />
        </div>
      </div>
    )
  }
}

export default App;
