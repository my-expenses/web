import {useState} from "react";
import Home from "./Home";

const HomeContainer = () => {
  const [month, setMonth] = useState(new Date())

  return(
    <div>
      <Home
        month={month}
        setMonth={(value) => setMonth(value)}
      />
    </div>
  )
}

export default HomeContainer
