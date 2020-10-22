import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import Header from "./components/Header/header";


function App() {
  return (
    <Router>
      <div id="header">
        <Header />
        <Nav />
      </div>
      
      <div>
        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;