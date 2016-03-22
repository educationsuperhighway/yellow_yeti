import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import KillScreenContainer from '../containers/kill_screen.jsx';
import AvailableViewSelector from '../containers/available_view_selector.jsx';
import SelectBandwidth from '../containers/bandwidth_selector.jsx';
import BandwidthSentence from '../containers/bandwidth_sentence.jsx';
import ActiveVideoPlayer from '../containers/active_video_player.jsx';

class App extends Component {
  static propTypes = {
    videoTimer: PropTypes.object.isRequired,
    view: PropTypes.string.isRequired
  };

  bandwidthFilter() {
    if(this.props.view != 'BANDWIDTH_SELECTOR') {
      return (<div></div>)
    }
    return (
      <div className='bandwidth-filter row'>
        <div className="col-md-2"></div>
        <SelectBandwidth />
        <div className="col-md-2"></div>
      </div>
    )
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
    return classNames('row', {
      hidden: this.props.view != 'KILL_SCREEN'
    });
  }

  render() {
    return (
      <div className="container-fluid container-flex">
        <div className="row intro-heading">
          <div className="col-md-8 col-md-push-2">
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
        </div>
        <div className="row video-row">
          <div className="col-xs-12">
            {this.bandwidthFilter()}
            <div className={this.videoPlayer()} id="video-row">
              <ActiveVideoPlayer />
            </div>
            <div className={this.killScreen()}>
              <KillScreenContainer milliseconds={this.props.videoTimer.elapsed} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
