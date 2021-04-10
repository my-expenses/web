import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/UserActions";
import {useHistory} from "react-router-dom";
import {ReactComponent as Logo} from "../logo.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginBottom: {
    marginBottom: theme.spacing(2)
  }
}));

const CustomAppBar = () => {
  const classes = useStyles();

  const isAuthenticated = useSelector(state => state.userData.loggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogoutButton = () => {
    localStorage.setItem("token", "")
    dispatch(logout())
    history.push("/login")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.marginBottom}>
        <Toolbar>
          <Logo />
          <Typography variant="h6" className={classes.title}>
            Expenses
          </Typography>
          {isAuthenticated && <Button color="inherit" onClick={() => handleLogoutButton()}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar
