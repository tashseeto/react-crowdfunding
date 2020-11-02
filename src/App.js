import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header/header";
import LoginPage from "./pages/LoginPage";
import NewProjectPage from "./pages/NewProjectPage";
// import ProjectEditPage from "./pages/ProjectEditPage";
import "./App.css";

function App() {
  
  // const username = window.localStorage.getItem("username");

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

        {/* <Route path="/project/:id/edit">
          <ProjectEditPage />
        </Route> */}

        <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/newproject">
            <NewProjectPage />
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