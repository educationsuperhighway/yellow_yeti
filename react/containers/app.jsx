import { connect } from 'react-redux';
import App from '../components/app.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    videoTimer: state.videoTimer,
    view: state.view.current
  }
};

const WiredApp = connect(
  mapStateToProps
)(App);

export default WiredApp;
