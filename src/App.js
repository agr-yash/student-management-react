import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/students">
            <ListPage listName="students" />
          </Route>
          <Route path="/professors">
            <ListPage listName="professors" />
          </Route>
          <Route path="/branches">
            <ListPage listName="branches" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
