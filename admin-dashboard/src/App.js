import React from "react";
import "./App.css";
import "./Responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
