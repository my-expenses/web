import {useState} from "react";
import Home from "./Home";
import {useDispatch} from "react-redux";
import {changeMonth} from "../actions/MonthActions";

const HomeContainer = () => {
  const [month, setMonth] = useState(new Date())

  const dispatch = useDispatch()

  const handleMonthChange = val => {
    setMonth(val)
    dispatch(changeMonth(val))
  }

  return(
    <div>
      <Home
        month={month}
        handleMonthChange={handleMonthChange}
      />
    </div>
  )
}

export default HomeContainer
