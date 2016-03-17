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
    videoEvents: {
      ended: () => {
        dispatch(stopTimer());
        console.log('ended');
      },
      loadstart: () => {
        console.log('loadstart');
      },
      loadeddata: (trust, e) => {
        console.log('loadeddata', JSON.stringify(e));
      },
      loadedmetadata: (trust, e) => {
        console.log('loadedmetadata', JSON.stringify(e));
      },
      canplay: () => {
        console.log('canplay');
      },
      play: () => {
        console.log('play');
      },
      playing: () => {
        console.log('playing');
      },
      progress: (trust, e) => {
        console.log('progress', JSON.stringify(e));
      },
      stalled: () => {
        console.log('stalled');
      },
      suspend: () => {
        console.log('suspend');
      },
      waiting: () => {
        console.log('waiting');
      }
    }
  }
};

const ActiveVideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default ActiveVideoPlayer;
