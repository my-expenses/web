import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterContainer from "./users/register/RegisterContainer";
import HomeContainer from "./home/HomeContainer";
import CustomAppBar from "./utils/CustomAppBar";
import ErrorMessage from "./utils/ErrorMessage";
import PrivateRoute from "./utils/PrivateRoute";
import LandingContainer from "./landing/LandingContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <ErrorMessage />
        <div className="content">
          <Switch>
            <Route exact path="/login">
              <LandingContainer />
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
