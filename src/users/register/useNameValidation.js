import {useEffect, useState} from "react";
import validator from "validator";

export const useNameValidation = (name) => {
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    let empty = validator.isEmpty(name);
    let alphaChars = validator.isAlpha(name);
    let invalidName = empty || !alphaChars;
    setError(invalidName)
    if (empty)
      setErrorText("You must enter your name")
    else if (!alphaChars)
      setErrorText("Your name must contain letters only")
    else
      setErrorText("")

  }, [name])
  return [error, errorText]
}