import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

/**
 * Render the root component of the application.
 * @param rootElement The root element to render the component in.
 */
const renderApp = (rootElement: HTMLElement): void => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

// Call the function with the root element
const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  renderApp(rootElement);
} else {
  console.error('Could not find root element');
}

