const initialState = {
  accessToken: "",
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGGED_IN": {
      return {
        accessToken: action.accessToken,
        loggedIn: true,
      }
    }
    case "LOGGED_OUT": {
      return {
        accessToken: "",
        loggedIn: false,
      }
    }
    default:
      return state
  }
}

export default userReducer