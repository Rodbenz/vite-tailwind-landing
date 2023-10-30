import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from './components/Hero/index.jsx';
import About from './components/About/index.jsx';

const router = createBrowserRouter([
  {
    path: "/vitejs",
    element: <App />,
    children: [
      {
        path: "/vitejs",
        element: <Hero />,
      },
      {
        path: "/vitejs/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
