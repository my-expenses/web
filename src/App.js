import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginContainer from "./users/login/LoginContainer";
import RegisterContainer from "./users/register/RegisterContainer";
import HomeContainer from "./home/HomeContainer";
import CustomAppBar from "./utils/CustomAppBar";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <div className="content">
          <Switch>
            <Route exact path="/login">
              <LoginContainer/>
            </Route>
            <Route exact path="/register">
              <RegisterContainer />
            </Route>
            <Route exact path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
