export const fetchedCategories = categories => {
  return {
    type: "FETCHED",
    categories: categories,
  }
}

export const addedCategory = category => {
  return {
    type: "ADDED_CATEGORY",
    addedCategory: category,
  }
}

export const removedCategory = categoryID => {
  return {
    type: "DELETE_CATEGORY",
    deletedCategoryID: categoryID,
  }
}

export const updatedCategory = category => {
  return {
    type: "UPDATE_CATEGORY",
    category: category,
  }
}