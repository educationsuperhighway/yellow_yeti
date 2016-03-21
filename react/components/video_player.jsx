import React, { Component, PropTypes } from 'react';
import { formatBandwidth } from '../utils.js';
import VideoTimer from '../containers/video_timer.jsx';

class VideoPlayer extends Component {
  static propTypes = {
    src:   PropTypes.string,
    speed: PropTypes.number,
    onMounted: PropTypes.func,
    videoEvents: PropTypes.object
  };

  static defaultProps = {
    videoEvents: {
      ended: (() => {}),
      loadstart: (() => {}),
      loadeddata: (() => {}),
      loadedmetadata: (() => {}),
      canplay: (() => {}),
      play: (() => {}),
      playing: (() => {}),
      progress: (() => {}),
      stalled: (() => {}),
      suspend: (() => {}),
      waiting: (() => {})
    }
  };

  registerListeners(video) {
    let listeners = this.props.videoEvents;

    video.addEventListener('ended', listeners.ended);
    video.addEventListener('loadstart', listeners.loadstart);
    video.addEventListener('loadeddata', listeners.loadeddata);
    video.addEventListener('loadedmetadata', listeners.loadedmetadata);
    video.addEventListener('canplay', listeners.canplay);
    video.addEventListener('play', listeners.play);
    video.addEventListener('playing', listeners.playing);
    video.addEventListener('progress', listeners.progress);
    video.addEventListener('stalled', listeners.stalled);
    video.addEventListener('suspend', listeners.suspend);
    video.addEventListener('waiting', listeners.waiting);
  }

  componentDidMount() {
    let video = document.getElementById('video-player');
    this.props.onMounted(video);
    this.registerListeners(video);
  }

  render() {
    return (
      <div className="watch-video-row col-md-10 col-md-offset-2">
        <div className="current-video-speed-bar">
          <p className="video-is-playing col-md-8">
            This video is playing at&nbsp;
            <strong>
              <span className='district-bw'>
                {formatBandwidth(this.props.speed)}
              </span>
            </strong>
          </p>
        </div>
        <video id="video-player"
               width="800"
               height="420">
          <source className="mp4" type="video/mp4" src={this.props.src}/>
        </video>
        <div className="experience-other-speeds"><p className="description">To
          see how a student might experience bandwidth differently,
          explore by clicking on the various tiers of bandwidth
          availability</p>
          <dl className="bandwidth-bar-chart">
            <dd className="bandwidth bandwidth-50"></dd>
            <dd className="bandwidth bandwidth-40"></dd>
            <dd className="bandwidth bandwidth-30"></dd>
            <dd className="bandwidth bandwidth-20"></dd>
            <dd className="bandwidth bandwidth-10"></dd>
          </dl>
          <button id="video-play-button" className="btn btn-default">Play
            Now<i className="glyphicon glyphicon-play pull-left"></i>
          </button>
        </div>
        <VideoTimer />
      </div>
    )
  }
}

export default VideoPlayer;
