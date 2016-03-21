import { connect } from 'react-redux';
import PlayTimer from '../components/play_timer.jsx';

const mapStateToProps = (state) => {
  if(typeof state.videoTimer === 'undefined') {
    return {};
  }
  return {
    milliseconds: state.videoTimer.elapsed
  }
};

const VideoTimer = connect(
  mapStateToProps
)(PlayTimer);

export default VideoTimer;
