import React, { Component, PropTypes } from 'react';
import { formatTime } from '../utils.js';

class KillScreen extends Component {
  static propTypes = {
    milliseconds: PropTypes.number
  };

  render() {
    return (
      <div className="kill-screen">
        <p>Time spent watching this 20 second video:</p>
        <p className="time-spent">{formatTime(this.props.milliseconds)}</p>
      </div>
    )
  }
}

export default KillScreen;
