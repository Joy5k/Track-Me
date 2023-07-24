import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AmountProvider } from './Pages/AmountProvider/AmountProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AmountProvider>
    <App />
</AmountProvider>
  </React.StrictMode>,
)
