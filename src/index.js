import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Trending from './pages/Trending';
import Series from './pages/Series';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Movies",
    element: <Movies />,
  },
  {
    path: "Trending",
    element: <Trending />,
  },
  {
    path: "Search",
    element: <Search />,
  },
  {
    path: "Series",
    element: <Series />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


