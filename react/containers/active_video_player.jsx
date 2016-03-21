import { connect } from 'react-redux';
import { setVideoNode } from '../actions/video';
import { stopTimer } from '../actions/timer';
import { showKillScreen } from '../actions/view';
import VideoPlayer from '../components/video_player.jsx';

const mapStateToProps = (state) => {
  if(typeof state.video === 'undefined') {
    return {}
  }
  return {
    src: state.video.src,
    speed: Number(state.bandwidth)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMounted: (video) => {
      dispatch(setVideoNode(video));
    },
    videoEvents: {
      ended: () => {
        dispatch(stopTimer());
        dispatch(showKillScreen());
      },
      loadstart: () => {
      },
      loadeddata: () => {
      },
      loadedmetadata: () => {
      },
      canplay: () => {
      },
      play: () => {
      },
      playing: () => {
      },
      progress: () => {
      },
      stalled: () => {
      },
      suspend: () => {
      },
      waiting: () => {
      }
    }
  }
};

const ActiveVideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default ActiveVideoPlayer;
