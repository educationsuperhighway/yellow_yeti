import { connect } from 'react-redux';
import PlayTimer from '../components/play_timer.jsx';

function elapsed(timer) {
  return timer.tick - timer.start;
}

const mapStateToProps = (state) => {
  if(typeof state.videoTimer === 'undefined') {
    return {};
  }
  return {
    milliseconds: elapsed(state.videoTimer)
  }
};

const VideoTimer = connect(
  mapStateToProps
)(PlayTimer);

export default VideoTimer;
