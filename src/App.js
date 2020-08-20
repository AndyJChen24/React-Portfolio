import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Portfolio from './components/Portfolio';

import Index from "./components/Pages/Index"
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={"/contact"}>
          <Contact/>
        </Route>
        <Route exact path={"/about"}>
          <About/>
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio/>
        </Route>
        <Route exact path={"/"}>
          <Index/>
        </Route>
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
