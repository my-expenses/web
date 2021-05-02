import {useState} from "react";
import Register from "./Register";
import validator from 'validator';
import {usePasswordValidation} from "./usePasswordValidation";
import {useButtonValidation} from "./useButtonValidation";
import {useNameValidation} from "./useNameValidation";
import api from "../../gateways/api";
import qs from "qs";
import {useDispatch} from "react-redux";
import {errorAction, successAction} from "../../actions/MessageActions";
import {useHistory} from "react-router-dom";

const RegisterContainer = (props) => {

  const [firstName, setFirstName] = useState('')
  const [firstNameError, firstNameErrorText] = useNameValidation(firstName)
  const [lastName, setLastName] = useState('')
  const [lastNameError, lastNameErrorText] = useNameValidation(lastName)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState('Please enter a valid email')

  const dispatch = useDispatch()
  const history = useHistory();

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar,] =
    usePasswordValidation({
    firstPassword: password,
    secondPassword: confirmPassword,
  });

  const validForm = useButtonValidation({
    firstNameError, lastNameError, emailError, validLength, hasNumber, upperCase, lowerCase, match, specialChar
  })

  const onEmailChange = (val) => {
    if (validator.isEmail(val))
      setEmailError('')
    else
      setEmailError('Please enter a valid email')
    setEmail(val)
  }

  const onSubmit = () => {
    api.post("/users/register", qs.stringify({
      fullName: firstName + " " + lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })).then(() => {
      dispatch(successAction("User created"))
      props.handleShowLogin()
    }).catch(err => {
      dispatch(errorAction(err.response.data.message))
    })
  }

  return (
    <div>
      <Register
        firstName={firstName}
        firstNameError={firstNameError}
        firstNameTextError={firstNameErrorText}
        onFirstNameChange={(value) => setFirstName(value)}

        lastName={lastName}
        lastNameError={lastNameError}
        lastNameTextError={lastNameErrorText}
        onLastNameChange={(value) => setLastName(value)}

        email={email}
        emailError={emailError.length > 0}
        emailTextError={emailError}
        onEmailChange={(value) => onEmailChange(value)}

        password={password}
        onPasswordChange={(value) => setPassword(value)}

        confirmPassword={confirmPassword}
        onConfirmPasswordChange={(value) => setConfirmPassword(value)}

        validLength={validLength}
        hasNumber={hasNumber}
        uppercase={upperCase}
        lowercase={lowerCase}
        specialChar={specialChar}
        match={match}

        enableButton={validForm}
        onSubmit={() => onSubmit()}

        handleShowLogin={props.handleShowLogin}
      />
    </div>
  );
};

export default RegisterContainer;