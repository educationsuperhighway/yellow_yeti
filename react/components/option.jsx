import React, { Component, PropTypes } from 'react';

class Option extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  };

  render() {
    return (
      <option value={this.props.value}>
        {this.props.text}
      </option>
    )
  }
}

export default Option;
