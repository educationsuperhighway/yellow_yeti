import React, { Component, PropTypes } from 'react';

class CurrentBandwidth extends Component {
  static propTypes = {
    text:  PropTypes.string
  };

  render() {
    if(typeof this.props.text === 'undefined') {
      return(<span></span>)
    }
    return (
      <div className="row">
        <p className="current-bandwidth-sentence">
          Current bandwidth: <span>
          <span className='district-bw'>{this.props.text}</span>
          </span>
        </p>
      </div>
    )
  }
}

export default CurrentBandwidth;
