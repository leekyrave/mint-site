import React from 'react';
import Header from './common/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Footer from './common/Footer';


import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className = "wrapper">
        <Header />
          <Routes>
            <Route Component = {Home} index/>
            <Route Component = {Signup} path = "/signup"/>
            <Route Component = {Signin} path = "/signin"/>
            <Route Component = {NotFound} path = "*"/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
