import React from 'react';
import './styles/app.scss'
import { App } from './app/App';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')

const root = createRoot(container!)
console.log('file: index.tsx ~ line 7 ~ root', root);


root.render(<App />)
// ReactDOM.render(<App />, document.getElementById('root'));