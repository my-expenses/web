const initialState = {
  error: false,
  success: false,
  message: "",
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        // ...state, if there's multiple fields that won't change
        error: false,
        success: true,
        message: action.message
      }
    case "ERROR":
      return {
        error: true,
        success: false,
        message: action.message
      }
    case "CLOSE":
      return {
        ...state,
        error: false,
        success: false,
      }
    default:
      return state
  }
}

export default errorReducer