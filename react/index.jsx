import { render } from 'react-dom';
import { Provider } from 'react-redux';
import WiredApp from './containers/app.jsx';
import dataStore from './data_store.js';

$(() => {
  var node = document.getElementById('root');
  if(typeof node === 'undefined') {
    return;
  }
  render(
    <Provider store={dataStore}>
      <WiredApp />
    </Provider>, node
  );
});
