import {useEffect, useState} from "react";
import api from "../gateways/api";
import qs from "qs";
import CategoriesChips from "./CategoriesChips";

const CategoriesChipsContainer = ({categories, setCategories}) => {
  const [showTextField, setShowTextField] = useState(false);
  const [typedCategoryName, setTypedCategoryName] = useState('');  // used for new or edited names
  const [nameErrorText, setNameErrorText] = useState('');

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    api.get("/auth/categories")
      .then(res => {
        setCategories(res.data.categories)
      }).catch(err => console.log(err))
  }, [setCategories])

  const createNewCategory = () => {
    api.post('/auth/categories', qs.stringify({title: typedCategoryName}))
      .then(res => {
        setCategories(prevState => [...prevState, res.data.category])
        setShowTextField(false)
        setTypedCategoryName("")
      })
      .catch(err => console.log(err))
  }

  const deleteCategory = () => {
    const categoryID = categoryToEdit.ID
    api.delete('/auth/categories/' + categoryID)
      .then(() => {
        setCategories((prevState => prevState.filter(category => category.ID !== categoryID)))
        handleEditDialogClose()
      })
      .catch(err => console.log(err))
  }

  const handleCategoryNameEdit = (value) => {
    setTypedCategoryName(value)
    let errorFound = false
    for (let i = 0; i < categories.length; i++)
      if (categories[i].title === value)
        errorFound = true
    if (errorFound)
      setNameErrorText("Duplicate name found")
    else
      setNameErrorText("")
  }

  const updateCategory = () => {
    api.put("/auth/categories", qs.stringify({
      categoryID: categoryToEdit.ID,
      title: typedCategoryName
    })).then(res => {
      let updatedCategory = res.data.category
      setCategories((prevState => prevState.map(category => {
        if (category.ID === updatedCategory.ID)
          return updatedCategory
        return category
      })))
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
        categoriesChips={categories}
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