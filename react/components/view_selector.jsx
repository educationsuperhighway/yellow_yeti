import React, { Component, PropTypes } from 'react';

class ViewSelector extends Component {
  static propTypes = {
    current: PropTypes.string,
    list: PropTypes.array,
    onChange: PropTypes.func
  };

  render() {
    return (
      <select onChange={this.props.onChange}>
        {this.props.list.map(view =>
          <option key={view} value={view}>{view}</option>
        )}
      </select>
    )
  }
}

export default ViewSelector;
