import { connect } from 'react-redux';
import { setBandwidth } from '../actions/bandwidth.js';
import { setVideoSource, playVideo } from '../actions/video.js';
import { initializeTimer } from '../actions/timer.js';
import Select from '../components/select.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    options: state.bandwidthOptions
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setBandwidth(e.target.value));
    },
    onPlay: (bandwidth) => {
      dispatch(setVideoSource(bandwidth));
      dispatch(playVideo());
      dispatch(initializeTimer(100));
    }
  }
};

const SelectBandwidth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);

export default SelectBandwidth;
