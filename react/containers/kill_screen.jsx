import { connect } from 'react-redux';
import { setScreen } from '../actions/view.js';
import KillScreen from '../components/kill_screen.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    milliseconds: ownProps.milliseconds
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(setScreen('BANDWIDTH_SELECTOR'))
    }
  }
};

const KillScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KillScreen);

export default KillScreenContainer;
