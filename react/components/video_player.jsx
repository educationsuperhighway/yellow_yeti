import React, { Component, PropTypes } from 'react';
import VideoTimer from '../containers/video_timer.jsx';

class VideoPlayer extends Component {
  static propTypes = {
    src:   PropTypes.string,
    speed: PropTypes.number,
    onMounted: PropTypes.func,
    onPlayEnd: PropTypes.func
  };

  componentDidMount() {
    let video = document.getElementById('video-player');
    this.props.onMounted(video);
    video.addEventListener('ended', this.props.onPlayEnd);
  }

  render() {
    return (
      <div className="watch-video-row col-md-10 col-md-offset-2">
        <div className="current-video-speed-bar">
          <p className="video-is-playing col-md-8">
            This video is playing at <strong>
            <span className='district-bw'>{this.props.speed}</span>
            kbps/student</strong>
          </p>
        </div>
        <video id="video-player"
               preload="auto"
               width="800"
               height="420">
          <source className="mp4" type="video/mp4" src={this.props.src}/>
        </video>
        <VideoTimer />
      </div>
    )
  }
}

export default VideoPlayer;
