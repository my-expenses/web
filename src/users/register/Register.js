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
                                        label="8 characters"
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

  validLength: PropTypes.bool,
  hasNumber: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  specialChar: PropTypes.bool,
  match: PropTypes.bool,
}

export default Register;