import React, { useContext } from "react"
import { dateContext } from "../App/App"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button, Container } from "react-bootstrap"
import "./Search.css"
import { subDays, addDays } from "date-fns/esm"

//Funtional Component - Does not contain state, only receive props
const Search = () => {
  let { date, setDate, fetchUsers } = useContext(dateContext)

  //find the No of days between 2 dates
  const getNoOfDaysFromToday = todaysDate => {
    var date1 = new Date("2008-01-12")
    var date2 = todaysDate
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime()
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    return Difference_In_Days
  }

  const onSearchUsers = () => fetchUsers()
  const onChangeDate = date => setDate(date)
  //gets the currents date from the state
  //Converts to JSON Date string

  return (
    <Container className="center">
      <DatePicker
        onChange={onChangeDate}
        selected={date}
        dateFormat="yyyy/MM/dd"
        minDate={subDays(date, getNoOfDaysFromToday(date))}
        maxDate={addDays(new Date(), 0)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        placeholderText="Select a date"
      />
      <Button
        variant="success"
        size="md"
        className="custom-button-style center"
        onClick={onSearchUsers}
      >
        Get Users
      </Button>
    </Container>
  )
}

export default Search
