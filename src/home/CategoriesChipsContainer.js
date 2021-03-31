import {useEffect, useState} from "react";
import api from "../gateways/api";
import qs from "qs";
import CategoriesChips from "./CategoriesChips";

const CategoriesChipsContainer = () => {
  const [categoriesChips, setCategoriesChips] = useState([]);
  const [showTextField, setShowTextField] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newNameErrorText, setNewNameErrorText] = useState('');

  useEffect(() => {
    api.get("/auth/categories")
      .then(res => {
        setCategoriesChips(res.data.categories)
      }).catch(err => console.log(err))
  }, [])

  const createNewCategory = () => {
    api.post('/auth/categories', qs.stringify({title: newCategoryName}))
      .then(res => {
        setCategoriesChips(prevState => [...prevState, res.data.category])
        setShowTextField(false)
        setNewCategoryName("")
      })
      .catch(err => console.log(err))
  }

  const deleteCategory = (categoryID) => {
    api.delete('/auth/categories/' + categoryID)
      .then(() => setCategoriesChips(
        (prevState => prevState.filter(category => category.ID !== categoryID))
      ))
      .catch(err => console.log(err))
  }

  const handleNameChange = (value) => {
    setNewCategoryName(value)
    let errorFound = false
    for(let i = 0; i < categoriesChips.length; i++)
      if (categoriesChips[i].title === value)
        errorFound = true
    if (errorFound)
      setNewNameErrorText("Duplicate name found")
    else
      setNewNameErrorText("")
  }


  return (
    <div>
      <CategoriesChips
        categoriesChips={categoriesChips}
        showTextField={showTextField}
        setShowTextField={setShowTextField}
        newCategoryName={newCategoryName}
        setNewCategoryName={(value) => setNewCategoryName(value)}
        createNewCategory={createNewCategory}
        deleteCategory={deleteCategory}
        handleNameChange={handleNameChange}
        newNameError={newNameErrorText.length > 0}
        newNameErrorText={newNameErrorText}
      />
    </div>
  );
};

export default CategoriesChipsContainer;