import React, { Component, PropTypes } from 'react';
import { formatTime } from '../utils.js';

class KillScreen extends Component {
  static propTypes = {
    milliseconds: PropTypes.number,
    onClose: PropTypes.func
  };

  render() {
    return (
      <div className="kill-screen">
        <p>Time spent watching this 20 second video:</p>
        <p className="time-spent">{formatTime(this.props.milliseconds)}</p>
        <p>
          <button className="btn btn-default" onClick={this.props.onClose}>
            Choose A Different Speed
          </button>
        </p>
      </div>
    )
  }
}

export default KillScreen;
