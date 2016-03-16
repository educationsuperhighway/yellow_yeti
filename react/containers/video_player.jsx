import { connect } from 'react-redux';
import { setVideoNode } from '../actions/video';
import { stopTimer } from '../actions/timer';
import VideoPlayer from '../components/video_player.jsx';

const mapStateToProps = (state) => {
  if(typeof state.video === 'undefined') {
    return {}
  }
  return {
    src: state.video.src
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMounted: (video) => {
      dispatch(setVideoNode(video));
    },
    onPlayEnd: () => {
      dispatch(stopTimer());
    }
  }
};

const ActiveVideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default ActiveVideoPlayer;
