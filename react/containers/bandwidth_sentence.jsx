import { connect } from 'react-redux';
import CurrentBandwidth from '../components/current_bandwidth.jsx';

const mapStateToProps = (state, _ownProps) => {
  var selected = state.bandwidthOptions.find((opt) => {
    return Number(opt.value) === Number(state.bandwidth);
  });
  return {
    text: selected ? selected.text : undefined
  }
};

const BandwidthSentence = connect(
  mapStateToProps
)(CurrentBandwidth);

export default BandwidthSentence;
