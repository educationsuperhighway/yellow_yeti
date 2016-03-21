import React, { Component, PropTypes } from 'react';
import { formatTime } from '../utils.js';

class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number
  };

  render() {
    return (
      <progress max='100' value={this.props.percent}>
        <span>{this.props.percent}</span>% played
      </progress>
    )
  }
}

export default Progress;
