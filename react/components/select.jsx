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
    console.log(form.bandwidth.value);
    this.props.onPlay(form.bandwidth.value);
  }

  render() {
    return (
      <div className="row bandwidth-filter">
        <div className="col-md-2"></div>
        <div className="col-md-4 filters">
          <form onSubmit={this.onSubmit.bind(this)}>
            <select name="bandwidth" onChange={this.props.onChange}
                    id="bandwidth-dropdown"
                    className="form-control state"
            >
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
        <div className="col-md-2"></div>
      </div>
    )
  }
}

export default Select;
