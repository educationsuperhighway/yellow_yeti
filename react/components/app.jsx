import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import KillScreen from '../components/kill_screen.jsx';
import AvailableViewSelector from '../containers/available_view_selector.jsx';
import SelectBandwidth from '../containers/bandwidth_selector.jsx';
import BandwidthSentence from '../containers/bandwidth_sentence.jsx';
import ActiveVideoPlayer from '../containers/active_video_player.jsx';
import ActiveVideoInfo from '../containers/active_video_info.jsx';

class App extends Component {
  static propTypes = {
    videoTimer: PropTypes.object.isRequired,
    view: PropTypes.string.isRequired
  };

  componentWillReceiveProps(nextProps) {
  }

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
      hidden: this.props.view != 'BANDWIDTH_SELECTOR'
    });
  }

  bandwidthSentence() {
    return classNames('row', 'current-bandwidth-sentence', this.videoPlayer())
  }

  videoPlayer() {
    return classNames('row', {
      hidden: this.props.view != 'VIDEO_PLAYER'
    });
  }

  killScreen() {
    return classNames("row", {
      hidden: this.props.view != 'KILL_SCREEN'
    });
  }

  render() {
    return (
      <div className="container-fluid container-flex">
        <div className="row intro-heading">
          <h3 className="heading">
            Slow bandwidth impacts digital learning in the classroom.
          </h3>
          <p>
            Our children are trying to learn skills for tomorrow with dial-up
            speeds of the past.
          </p>
          <p>
            Experience what it feels like.
          </p>
        </div>
        <div className="row video-row">
          <div className={this.bandwidthFilter()}>
            <div className="col-xs-2"></div>
            <SelectBandwidth />
            <div className="col-xs-2"></div>
          </div>
          <div className={this.bandwidthSentence()}>
            <BandwidthSentence />
          </div>
          <div className={this.videoPlayer()} id="video-row">
            <ActiveVideoPlayer />
          </div>
          <div className={this.killScreen()}>
            <KillScreen milliseconds={this.props.videoTimer.elapsed} />
          </div>
        </div>
        <div className="sticky-top">
          <AvailableViewSelector />
        </div>
      </div>
    )
  }
}

export default App;
