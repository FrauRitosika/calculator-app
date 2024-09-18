import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { keyboard } from './keyboard-setting';
import { input } from './app-handler/input';
import expressionExecute from './app-handler/calculate';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App
        keyboard={keyboard}
        input={input}
        execute={expressionExecute}
      />
  </React.StrictMode>
);
