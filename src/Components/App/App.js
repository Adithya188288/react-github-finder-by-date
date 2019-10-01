import React, { Fragment } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "../Search/Search"
import Navbar from "../Navbar/Navbar"
import User from "../User/User"
import About from "../About/About"
import CardList from "../CardList/CardList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Note: App states are stored in App.js and sent as a props to the child elements
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      date: new Date()
    }
  }

  //Lifecycle method will run if the components succeffully mounts
  //Once it mounts an GET request is sent
  componentDidMount() {
    this.fetchUsers(this.formatDateFromState())
  }

  //Will send a Get Request and gets a response
  //Convert tye response to json
  //set the data to the state of our function using setState()
  fetchUsers = date => {
    fetch(`https://api.github.com/search/users?q=""+created:${date}`)
      .then(response => response.json())
      .then(users => this.setState({ users: users.items }))
  }

  //sets the selected Date from the react-date-picker to the state
  //Sent as a props to react-date-picker
  onChangeDate = date => this.setState({ date })
  //Will run on selecting the Get User button
  onSearchUsers = () => this.fetchUsers(this.formatDateFromState())

  //gets the currents date from the state
  //Converts to JSON Date string
  formatDateFromState = () => {
    let dateInState = this.state.date
    return dateInState.toJSON().slice(0, 10)
  }

  //find the No of days between 2 dates
  getNoOfDaysFromToday = todaysDate => {
    var date1 = new Date("2008-01-12")
    var date2 = todaysDate

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime()

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

    return Difference_In_Days
  }

  render() {
    const { users, date } = this.state
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
                    onChangeDate={this.onChangeDate}
                    onSearchUsers={this.onSearchUsers}
                    getNoOfDaysFromToday={this.getNoOfDaysFromToday}
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
}

export default App
