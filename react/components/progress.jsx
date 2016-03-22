import React, { Component, PropTypes } from 'react';
import { formatTime } from '../utils.js';

class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    status: PropTypes.string
  };

  render() {
    return (
      <progress max='100'
                className={this.props.status}
                value={this.props.percent}>
        <span>{this.props.percent}</span>% played
      </progress>
    )
  }
}

export default Progress;
