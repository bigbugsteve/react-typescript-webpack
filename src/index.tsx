import React from 'react';
import './styles/app.scss';
import { App } from './app/App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
