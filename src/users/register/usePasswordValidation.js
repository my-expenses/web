import {useEffect, useState} from "react";

export const usePasswordValidation = (
  {firstPassword = "", secondPassword = ""}) =>
{
  const [validLength, setValidLength] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [match, setMatch] = useState(false)

  useEffect(() => {
    setValidLength(firstPassword.length >= 8);
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setHasNumber(/\d/.test(firstPassword));
    setMatch(firstPassword.length > 0 && (firstPassword === secondPassword));
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
  }, [firstPassword, secondPassword])

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar]
}