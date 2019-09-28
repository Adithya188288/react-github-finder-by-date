import React from "react"
// import DatePicker from "react-date-picker"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button, Container } from "react-bootstrap"
import "./Search.css"

//Funtional Component - Does not contain state, only receive props
const Search = props => {
  return (
    <div className=" center">
      <Container>
        {/* <DatePicker
          onChange={props.onChangeDate}
          value={props.date}
          clearIcon={null}
          calendarIcon={null}
          format="y-MM-dd"
          maxDate={new Date()}
          minDate={new Date("2008-01-12")}
        /> */}
        <DatePicker
          onChange={props.onChangeDate}
          selected={props.date}
          dateFormat="yyyy/MM/dd"
          endDate={new Date()}
          minDate={new Date("2008-01-12")}
          withPortal
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
