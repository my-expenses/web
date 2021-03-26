import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from "../styling";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Person, Email, Lock} from "@material-ui/icons";


const Register = (props) => {
  const classes = styles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                value={props.fullName}
                error={props.fullNameError}
                helperText={props.fullNameTextError}
                autoFocus
                onChange={(e) => props.onFullNameChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={props.email}
                error={props.emailError}
                helperText={props.emailTextError}
                onChange={(e) => props.onEmailChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={props.password}
                  error={props.passwordError}
                  helperText={props.passwordTextError}
                  onChange={(e) => props.onPasswordChange(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={props.confirmPassword}
                  error={props.confirmPasswordError}
                  helperText={props.confirmPasswordTextError}
                  onChange={(e) => props.onConfirmPasswordChange(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Register.propTypes = {
  fullName: PropTypes.string,
  fullNameError: PropTypes.bool,
  fullNameTextError: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.bool,
  emailTextError: PropTypes.string,
  password: PropTypes.string,
  passwordError: PropTypes.bool,
  passwordTextError: PropTypes.string,
  confirmPassword: PropTypes.string,
  confirmPasswordError: PropTypes.bool,
  confirmPasswordTextError: PropTypes.string,
}

export default Register;