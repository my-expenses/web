export const login = token => {
  return {
    type: "LOGGED_IN",
    accessToken: token,
  }
}

export const logout = () => {
  return {
    type: "LOGGED_OUT"
  }
}