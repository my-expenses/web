const monthReducer = (state = new Date(), action) => {
  switch(action.type) {
    case "MONTH_CHANGE":
      return action.selectedMonth
    default:
      return state
  }
}

export default monthReducer