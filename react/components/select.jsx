import React, { Component, PropTypes } from 'react';
import Option from './option.jsx';

class Select extends Component {
  static propTypes = {
    options:  PropTypes.arrayOf(PropTypes.shape({
      text:  PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onChange: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
  };

  onSubmit(e) {
    e.preventDefault();
    let form = e.target;
    this.props.onPlay(form.bandwidth.value);
  }

  render() {
    return (
      <div className="col-xs-4 filters">
        <form onSubmit={this.onSubmit.bind(this)}>
          <select name="bandwidth" onChange={this.props.onChange}
                  id="bandwidth-dropdown"
                  className="form-control state"
          >
            <option>Select Bandwidth</option>
            {this.props.options.map(option =>
              <Option key={option.value}
                      value={option.value}
                      text={option.text}
              />
            )}
          </select>
          <button className="btn btn-default"
                  id="filter-play-button"
                  type="submit">
            Play Now
            <i className="glyphicon glyphicon-play pull-left"/>
          </button>
        </form>
      </div>
    )
  }
}

export default Select;
