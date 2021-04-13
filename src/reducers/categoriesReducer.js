const initialState = {
  categories: [],
  loading: false,
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH":
      return {
        categories: state.categories,
        loading: true,
      }
    case "FETCHED":
      return {
        categories: action.categories,
        loading: false,
      }
    case "ADDED_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.addedCategory]
      }
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.filter(category => category.ID !== action.deletedCategoryID)
      }

    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.ID === action.category.ID)
            return action.category
          return category
        })
      }
    default:
      return state
  }
}

export default categoriesReducer