import React, { Component, PropTypes } from 'react';

class SelectBandwidth extends Component {
  render() {
    return (
      <div>
        <select id="state-dropdown" className="form-control state">
          <option value="" selected="selected" disabled="disabled">Select State</option>
        </select>
        <select id="district-dropdown" className="form-control district">
          <option value="" selected="selected" disabled="disabled">Select School District</option>
        </select>
        <button className="btn btn-default inactive-play-button" id="filter-play-button">
          Play Now
          <i className="glyphicon glyphicon-play pull-left"/>
        </button>
      </div>
    )
  }
}

export default SelectBandwidth;
