import React, { Fragment, useState, useEffect, createContext } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "../Search/Search"
import Navbar from "../Navbar/Navbar"
import User from "../User/User"
import About from "../About/About"
import CardList from "../CardList/CardList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Note: Changing all class based componet to a functional one with react hooks
export const dateContext = createContext()
const App = () => {
  const [users, setUsers] = useState([])
  const [date, setDate] = useState(new Date())

  //This useEffects runs on button click after the date is changed
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  // this changes automatically when the data is changed
  // useEffect(() => {
  //   fetchUsers(formatDateFromState())
  // }, [date])

  //Get Request
  const fetchUsers = () => {
    let formattedDate = date.toJSON().slice(0, 10)
    fetch(`https://api.github.com/search/users?q=""+created:${formattedDate}`)
      .then(response => response.json())
      .then(users => setUsers(users.items))
  }

  //Using Context Api to send data to child components
  return (
    <dateContext.Provider value={{ date, setDate, fetchUsers, users }}>
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
                  <Search />
                  <CardList />
                </Fragment>
              )}
            />
            <Route path="/about" exact component={About} />
            <Route path="/user/:id" exact component={User} />
          </Switch>
        </Fragment>
      </Router>
    </dateContext.Provider>
  )
}

export default App
