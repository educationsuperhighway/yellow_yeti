import moment from 'moment';

export function formatTime(milliseconds) {
  return moment.utc(milliseconds).format("mm:ss:SS");
}
