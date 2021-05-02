import {useEffect, useState} from "react";
import api from "../../gateways/api";
import qs from "qs";
import CategoriesChips from "./CategoriesChips";
import {useDispatch, useSelector} from "react-redux";
import {errorAction, successAction} from "../../actions/MessageActions";
import {
  addedCategory,
  fetchedCategories,
  removedCategory,
  startCategoriesFetch,
  updatedCategory
} from "../../actions/CategoryActions";

const CategoriesChipsContainer = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [typedCategoryName, setTypedCategoryName] = useState('');  // used for new or edited names
  const [nameErrorText, setNameErrorText] = useState('');

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);

  const dispatch = useDispatch()
  const categoriesState = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(startCategoriesFetch())
    api.get("/auth/categories")
      .then(res => {
        dispatch(fetchedCategories(res.data.categories))
      }).catch(err => console.log(err))
  }, [])

  const createNewCategory = () => {
    api.post('/auth/categories', qs.stringify({title: typedCategoryName}))
      .then(res => {
        dispatch(addedCategory(res.data.category))
        setShowTextField(false)
        setTypedCategoryName("")
        dispatch(successAction("Category created"))
      })
      .catch(err => {
        dispatch(errorAction(err.response.data.message))
      })
  }

  const deleteCategory = () => {
    const categoryID = categoryToEdit.ID
    api.delete(`/auth/categories/${categoryID}`)
      .then(() => {
        dispatch(removedCategory(categoryID))
        dispatch(successAction("Category deleted"))
        handleEditDialogClose()
      })
      .catch(err => {
        dispatch(errorAction(err.response.data.message))
      })
  }

  const handleCategoryNameEdit = (value) => {
    setTypedCategoryName(value)
    let errorFound = false
    for (let i = 0; i < categoriesState.categories.length; i++)
      if (categoriesState.categories[i].title === value)
        errorFound = true
    if (errorFound)
      setNameErrorText("Duplicate name found")
    else
      setNameErrorText("")
  }

  const updateCategory = () => {
    api.put(`/auth/categories/${categoryToEdit.ID}`, qs.stringify({
      title: typedCategoryName
    })).then(res => {
      dispatch(successAction("Category updated"))
      let newUpdatedCategory = res.data.category
      dispatch(updatedCategory(newUpdatedCategory))
      handleEditDialogClose()
    })
  }

  const handleEditDialogOpen = (category) => {
    setTypedCategoryName(category.title)
    setCategoryToEdit(category)
    setConfirmDelete(false)
    setNameErrorText("")
    setOpenEditDialog(true)
  }

  const handleEditDialogClose = () => {
    setOpenEditDialog(false)
    setConfirmDelete(false)
    setTypedCategoryName("")
    setNameErrorText("")
    setCategoryToEdit({})
  }

  return (
    <div>
      <CategoriesChips
        categoriesState={categoriesState}
        showTextField={showTextField}
        setShowTextField={setShowTextField}

        typedCategoryName={typedCategoryName}
        setTypedCategoryName={(value) => setTypedCategoryName(value)}

        handleNameChange={handleCategoryNameEdit}
        nameError={nameErrorText.length > 0}
        nameErrorText={nameErrorText}

        createNewCategory={createNewCategory}
        deleteCategory={deleteCategory}

        openEditDialog={openEditDialog}
        handleEditDialogOpen={handleEditDialogOpen}
        handleEditDialogClose={handleEditDialogClose}

        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}

        updateCategory={updateCategory}
      />
    </div>
  );
};

export default CategoriesChipsContainer;