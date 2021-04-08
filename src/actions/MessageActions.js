export const successAction = message => {
  return {
    type: "SUCCESS",
    message: message
  }
}

export const errorAction = message => {
  return {
    type: "ERROR",
    message: message
  }
}

export const closeAction = () => {
  return {
    type: "CLOSE"
  }
}