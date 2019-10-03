import React, { Fragment, useState, useEffect } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "../Search/Search"
import Navbar from "../Navbar/Navbar"
import User from "../User/User"
import About from "../About/About"
import CardList from "../CardList/CardList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Note: Changing all class based componet to a functional one with react hooks
const App = () => {
  const [users, setUsers] = useState([])
  const [date, setDate] = useState(new Date())

  //This useEffects runs on button click after the date is changed
  useEffect(() => {
    fetchUsers(formatDateFromState())
  }, [])

  // this changes automatically when the data is changed
  // useEffect(() => {
  //   fetchUsers(formatDateFromState())
  // }, [date])

  //Will send a Get Request and gets a response
  //Convert tye response to json
  //set the data to the state of our function using setState()
  const fetchUsers = date => {
    fetch(`https://api.github.com/search/users?q=""+created:${date}`)
      .then(response => response.json())
      .then(users => setUsers(users.items))
  }

  //sets the selected Date from the react-date-picker to the state
  //Sent as a props to react-date-picker
  const onChangeDate = date => setDate(date)
  //Will run on selecting the Get User button
  const onSearchUsers = () => fetchUsers(formatDateFromState())

  //gets the currents date from the state
  //Converts to JSON Date string
  const formatDateFromState = () => {
    let dateInState = date
    return dateInState.toJSON().slice(0, 10)
  }

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

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Fragment>
                <p className="text-center margin-top font-size">
                  Select a date from 2008-01-12 till date
                </p>
                <Search
                  date={date}
                  onChangeDate={onChangeDate}
                  onSearchUsers={onSearchUsers}
                  getNoOfDaysFromToday={getNoOfDaysFromToday}
                />
                <CardList users={users} />
              </Fragment>
            )}
          />
          <Route path="/about" exact component={About} />
          <Route path="/user/:id" exact component={User} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
