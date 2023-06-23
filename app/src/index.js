import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import MainPage from './components/MainPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "/title/:titileId",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
    },
    {
      path: "/mainpage",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
