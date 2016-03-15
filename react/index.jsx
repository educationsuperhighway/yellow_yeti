import { render } from 'react-dom';
import SelectBandwidth from './components/select_bandwidth.jsx'

$(() => {
  var node = document.getElementById('select-bandwidth');
  if(typeof node === 'undefined') {
    return;
  }
  render(<SelectBandwidth/>, node);
});
