import {useEffect, useState} from "react";

export const useButtonValidation = (
  {firstNameError, lastNameError, emailError, validLength, hasNumber, upperCase, lowerCase, match, specialChar}) =>
{
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    setValidForm(
      !firstNameError && !lastNameError && emailError.length === 0 && validLength &&
      hasNumber && upperCase && lowerCase && match && specialChar
    )
  }, [firstNameError, lastNameError, emailError, validLength, hasNumber, upperCase, lowerCase, match, specialChar])
  return validForm
}