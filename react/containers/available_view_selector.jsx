import { connect } from 'react-redux';
import { setScreen } from '../actions/view.js';
import ViewSelector from '../components/view_selector.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.view.current,
    list: state.view.list
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setScreen(e.target.value))
    }
  }
};

const AvailableViewSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSelector);

export default AvailableViewSelector;
