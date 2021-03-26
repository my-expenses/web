import {useState} from "react";
import Register from "./Register";
import validator from 'validator';

const RegisterContainer = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')


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

  const onPasswordChange = (val) => {
    setPassword(val)
    if (val === confirmPassword)
      setConfirmPasswordError('')
    else
      setConfirmPasswordError("Passwords doesn't match")
  }

  const onConfirmPasswordChange = (val) => {
    setConfirmPassword(val)
    if (password === val)
      setConfirmPasswordError('')
    else
      setConfirmPasswordError("Passwords doesn't match")

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
        passwordError={passwordError.length > 0}
        passwordTextError={passwordError}
        onPasswordChange={(value) => onPasswordChange(value)}

        confirmPassword={confirmPassword}
        confirmPasswordError={confirmPasswordError.length > 0}
        confirmPasswordTextError={confirmPasswordError}
        onConfirmPasswordChange={(value) => onConfirmPasswordChange(value)}
      />
    </div>
  );
};

export default RegisterContainer;