import React, { Component, PropTypes } from 'react';
import { formatTime } from '../utils.js';

class PlayTimer extends Component {
  static propTypes = {
    milliseconds: PropTypes.number
  };

  render() {
    return (
      <div className="time-spent-playing">
        <p className="time-spent-sentence">
          Time spent playing<br/>this 20 second video:
        </p>
        <p className="timer">{formatTime(this.props.milliseconds)}</p>
      </div>
    )
  }
}

export default PlayTimer;
