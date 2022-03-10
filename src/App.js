import "./App.css";
import "./responsive.css";

import { HomeScreen } from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
