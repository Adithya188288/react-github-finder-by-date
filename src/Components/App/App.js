import React, { Fragment } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap"
import Search from "../Search/Search"
import CardList from "../CardList/CardList"

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

  render() {
    const { users, date } = this.state
    return (
      <Fragment>
        <Navbar
          style={{ justifyContent: "center" }}
          bg="dark"
          expand="sm"
          variant="dark"
        >
          <Navbar.Brand>Github Finder By Date</Navbar.Brand>
        </Navbar>
        <p className="text-center margin-top font-size">
          Select a date from 2008-01-12 till date
        </p>
        <Search
          date={date}
          onChangeDate={this.onChangeDate}
          onSearchUsers={this.onSearchUsers}
        />
        <CardList users={users} />
      </Fragment>
    )
  }
}

export default App
