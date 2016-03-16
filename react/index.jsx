import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import dataStore from './data_store.js';

$(() => {
  var node = document.getElementById('root');
  if(typeof node === 'undefined') {
    return;
  }
  render(
    <Provider store={dataStore}>
      <App />
    </Provider>, node
  );
});
