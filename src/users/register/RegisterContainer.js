import {useState} from "react";
import Register from "./Register";
import validator from 'validator';
import {usePasswordValidation} from "./usePasswordValidation";
import {useButtonValidation} from "./useButtonValidation";
import {useNameValidation} from "./useNameValidation";

const RegisterContainer = () => {

  const [firstName, setFirstName] = useState('')
  const [firstNameError, firstNameErrorText] = useNameValidation(firstName)
  const [lastName, setLastName] = useState('')
  const [lastNameError, lastNameErrorText] = useNameValidation(lastName)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState('Please enter a valid email')

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
      />
    </div>
  );
};

export default RegisterContainer;