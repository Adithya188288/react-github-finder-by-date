import React from "react"
import DatePicker from "react-date-picker"
import { Button, Container } from "react-bootstrap"
import "./Search.css"

//Funtional Component - Does not contain state, only receive props
const Search = props => {
  return (
    <div className=" center">
      <Container>
        <DatePicker
          onChange={props.onChangeDate}
          value={props.date}
          clearIcon={null}
          calendarIcon={null}
          format="y-MM-dd"
          maxDate={new Date()}
          minDate={new Date("2008-01-12")}
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
