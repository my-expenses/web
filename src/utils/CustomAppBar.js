import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/UserActions";
import {useHistory} from "react-router-dom";
import {ReactComponent as Logo} from "../logo.svg"
import {Drawer} from "@material-ui/core";
import LoginContainer from "../users/login/LoginContainer";
import RegisterContainer from "../users/register/RegisterContainer";

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
    dispatch(logout())
    history.push("/login")
  }

  const [openLoginDrawer, setOpenLoginDrawer] = useState(false)
  const [openRegisterDrawer, setOpenRegisterDrawer] = useState(false)

  const handleLoginClicked = () => {
    setOpenLoginDrawer(true)
    setOpenRegisterDrawer(false)
  }

  const handleRegisterClicked = () => {
    setOpenRegisterDrawer(true)
    setOpenLoginDrawer(false)
  }

  const handleDrawerClose = () => {
    setOpenRegisterDrawer(false)
    setOpenLoginDrawer(false)
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.marginBottom}>
          <Toolbar>
            <Logo/>
            <Typography variant="h6" className={classes.title}>
              Expenses
            </Typography>
            {!isAuthenticated && <Button color="inherit" onClick={() => setOpenLoginDrawer(true)}>Login</Button>}
            {isAuthenticated && <Button color="inherit" onClick={() => handleLogoutButton()}>Logout</Button>}
          </Toolbar>
        </AppBar>
      </div>
      <Drawer anchor="right" open={openLoginDrawer || openRegisterDrawer}
              onClose={() => handleDrawerClose()}>
        {openLoginDrawer && <LoginContainer
          handleShowRegister={handleRegisterClicked}
          handleDrawerClose={handleDrawerClose}
        />}
        {openRegisterDrawer && <RegisterContainer handleShowLogin={handleLoginClicked}/>}
      </Drawer>
    </div>

  );
}

export default CustomAppBar
