import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { NotificationsProvider } from '@mantine/notifications';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
