import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


import { RouterProvider } from 'react-router-dom';
import Mainrouter from './Mainrouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={Mainrouter}/>
  </React.StrictMode>
);
