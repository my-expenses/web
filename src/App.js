import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginContainer from "./users/login/LoginContainer";
import RegisterContainer from "./users/register/RegisterContainer";
import HomeContainer from "./home/HomeContainer";
import CustomAppBar from "./utils/CustomAppBar";
import ErrorMessage from "./utils/ErrorMessage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <ErrorMessage />
        <div className="content">
          <Switch>
            <Route exact path="/login">
              <LoginContainer/>
            </Route>
            <Route exact path="/register">
              <RegisterContainer />
            </Route>

            <PrivateRoute exact component={HomeContainer} path="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
