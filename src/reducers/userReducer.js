const initialState = {
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGGED_IN": {
      return {
        loggedIn: true,
      }
    }
    case "LOGGED_OUT": {
      localStorage.setItem("accessToken", "")
      localStorage.setItem("refreshToken", "")
      return {
        loggedIn: false,
      }
    }
    default:
      return state
  }
}

export default userReducer