import moment from 'moment';
import { defaultBandwidthOptions } from './reducers/bandwidth.js'

export function formatTime(milliseconds) {
  return moment.utc(milliseconds).format("mm:ss:SS");
}

export function formatBandwidth(milliseconds) {
  if(!milliseconds) { return ''; }
  let opt = defaultBandwidthOptions.find(opt => opt.value === milliseconds);
  return opt.text;
}
