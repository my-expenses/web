const categoriesReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED":
      return action.categories
    case "ADDED_CATEGORY":
      return [...state, action.addedCategory]
    case "DELETE_CATEGORY":
      return state.filter(category => category.ID !== action.deletedCategoryID)
    case "UPDATE_CATEGORY":
      return state.map(category => {
        if (category.ID === action.category.ID)
          return action.category
        return category
      })
    default:
      return state
  }
}

export default categoriesReducer