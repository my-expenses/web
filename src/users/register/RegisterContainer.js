import {useState} from "react";
import Register from "./Register";
import validator from 'validator';
import {usePasswordValidation} from "./usePasswordValidation";

const RegisterContainer = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar,] =
    usePasswordValidation({
    firstPassword: password,
    secondPassword: confirmPassword,
  });


  const onFullNameChange = (val) => {

    if (validator.isEmpty(val))
      setFullNameError('Please enter your name')
    else if (!validator.isAlpha(val))
      setFullNameError('Your name cannot contain numbers')
    else
      setFullNameError('')
    setFullName(val)
  }

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
        fullName={fullName}
        fullNameTextError={fullNameError}
        fullNameError={fullNameError.length > 0}
        onFullNameChange={(value) => onFullNameChange(value)}

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
      />
    </div>
  );
};

export default RegisterContainer;