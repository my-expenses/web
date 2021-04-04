import {useState} from "react";
import Home from "./Home";

const HomeContainer = () => {
  const [month, setMonth] = useState(new Date())
  const [categories, setCategories] = useState([]);

  return(
    <div>
      <Home
        month={month}
        setMonth={(value) => setMonth(value)}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  )
}

export default HomeContainer
