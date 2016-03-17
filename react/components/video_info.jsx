import React, { Component, PropTypes } from 'react';

class VideoInfo extends Component {
  static propTypes = {
    video: PropTypes.instanceOf(HTMLVideoElement)
  };

  videoProps() {
    return ["audioTracks", "autoplay", "buffered", "controller",
      "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted",
      "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup",
      "muted", "networkState", "paused", "playbackRate", "played", "preload",
      "readyState", "seekable", "seeking", "src", "startDate", "textTracks",
      "videoTracks", "volume"]
  }

  getVal(propName) {
    if (typeof(this.props.video) !== 'undefined') {
      return this.props.video[propName]
    }
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
            {this.videoProps().map(key =>
              <tr key={key}>
                <th>{key}</th>
                <td>{JSON.stringify(this.getVal(key))}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default VideoInfo;
