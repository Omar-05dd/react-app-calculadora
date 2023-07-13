import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './CounterStyle.css';

import CounterApp from './counterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
