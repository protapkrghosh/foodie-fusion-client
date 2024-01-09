import React from 'react'
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-[96%] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
