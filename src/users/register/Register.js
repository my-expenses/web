import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from "../styling";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Person, Email, Lock, Error} from "@material-ui/icons";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControl, FormGroup, FormLabel} from "@material-ui/core";


const Register = (props) => {
  const classes = styles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={props.firstName}
                error={props.firstNameError}
                helperText={props.firstNameTextError}
                autoFocus
                onChange={(e) => props.onFirstNameChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={props.lastName}
                error={props.lastNameError}
                helperText={props.lastNameTextError}
                onChange={(e) => props.onLastNameChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person/>
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
                      <Email/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={props.password}
                onChange={(e) => props.onPasswordChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={props.confirmPassword}
                onChange={(e) => props.onConfirmPasswordChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Constraints</FormLabel>
                <Grid container spacing={2}>
                  <Grid container direction="column" item xs={6}>
                    <FormGroup>
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.validLength}
                                                           name="length"/>}
                                        label="8+ characters"
                      />
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.hasNumber}
                                                           name="number"/>}
                                        label="Number"
                      />
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.uppercase}
                                                           name="upper"/>}
                                        label="Uppercase"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid container direction="column" item xs={6}>
                    <FormGroup>
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.lowercase}
                                                           name="lower"/>}
                                        label="Lowercase"
                      />
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.specialChar}
                                                           name="special"/>}
                                        label="Special character"
                      />
                      <FormControlLabel className={classes.formControlLabel}
                                        control={<Checkbox icon={<Error/>} className={classes.checkbox}
                                                           checked={props.match}
                                                           name="match"/>}
                                        label="Confirmed"
                                        color="primary"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!props.enableButton}
            onClick={props.onSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="text" onClick={() => props.handleShowLogin()}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Register.propTypes = {
  firstName: PropTypes.string,
  firstNameError: PropTypes.bool,
  firstNameTextError: PropTypes.string,
  lastName: PropTypes.string,
  lastNameError: PropTypes.bool,
  lastNameTextError: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.bool,
  emailTextError: PropTypes.string,
  password: PropTypes.string,
  passwordError: PropTypes.bool,
  passwordTextError: PropTypes.string,
  confirmPassword: PropTypes.string,
  confirmPasswordError: PropTypes.bool,
  confirmPasswordTextError: PropTypes.string,

  validLength: PropTypes.bool,
  hasNumber: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  specialChar: PropTypes.bool,
  match: PropTypes.bool,

  enableButton: PropTypes.bool
}

export default Register;