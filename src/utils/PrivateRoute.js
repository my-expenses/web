import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.userData.loggedIn)

  return (
    <Route {...rest} render={props =>
      isAuthenticated ? (<Component {...props} />) : (<Redirect to="/login"/>)
    }
    />
  );
};

export default PrivateRoute;