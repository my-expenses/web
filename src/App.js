import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginContainer from "./users/login/LoginContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/login">
              <LoginContainer/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
