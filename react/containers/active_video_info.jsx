import { connect } from 'react-redux';
import VideoInfo from '../components/video_info.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    video: state.video
  }
};

const ActiveVideoInfo = connect(
  mapStateToProps
)(VideoInfo);

export default ActiveVideoInfo;
