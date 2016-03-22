import { connect } from 'react-redux';
import Progress from '../components/progress.jsx';

function percent(video) {
  if( !video || !video.duration || !video.currentTime ) { return 0; }
  return Math.floor((100 / video.duration) * video.currentTime);
}

const mapStateToProps = (state, ownProps) => {
  return {
    percent: percent(state.video),
    status: state.videoStatus
  }
};

const VideoProgress = connect(
  mapStateToProps
)(Progress);

export default VideoProgress;
