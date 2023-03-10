import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import { MyProvider } from './context/MyProvider';
// npm install -D sass



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </MyProvider>
  </React.StrictMode>,
)
