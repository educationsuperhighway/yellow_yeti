import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class PlayTimer extends Component {
  static propTypes = {
    milliseconds: PropTypes.number
  };

  format(millis) {
    return moment.utc(millis).format("mm:ss:SS");
  }

  render() {
    return (
      <div className="time-spent-playing">
        <p className="time-spent-sentence">
          Time spent playing<br/>this 20 second video:
        </p>
        <p className="timer">{this.format(this.props.milliseconds)}</p>
      </div>
    )
  }
}

export default PlayTimer;
