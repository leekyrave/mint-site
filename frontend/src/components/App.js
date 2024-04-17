import React from 'react';
import * as ReactDOM from "react-dom";
import Header from './common/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './common/Footer';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>
      },
      
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  )

  return (
    <div className = "wrapper">
      <Header />
        <RouterProvider router = {router}/>
      <Footer />
    </div>
  );
}

export default App;
