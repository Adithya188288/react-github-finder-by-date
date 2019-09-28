import React from "react"
// import DatePicker from "react-date-picker"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button, Container } from "react-bootstrap"
import "./Search.css"
import { subDays, addDays } from "date-fns/esm"

//Funtional Component - Does not contain state, only receive props
const Search = props => {
  return (
    <div className=" center">
      <Container>
        <DatePicker
          onChange={props.onChangeDate}
          selected={props.date}
          dateFormat="yyyy/MM/dd"
          minDate={subDays(props.date, props.getNoOfDaysFromToday(props.date))}
          maxDate={addDays(new Date(), 0)}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select a date"
        />
        <Button
          variant="success"
          size="md"
          className="custom-button-style"
          onClick={props.onSearchUsers}
        >
          Get Users
        </Button>
      </Container>
    </div>
  )
}

export default Search
