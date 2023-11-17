import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Button from './components/Button'
import Table from './components/Table'
import Image from './components/views/Image'
import Data from './components/Data'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Data />
  </React.StrictMode>,
)
