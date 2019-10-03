import React, { useState, useEffect } from "react"
import { Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./User.css"

const User = props => {
  //using react hooks to add state to a functional component
  const [user, setUser] = useState({})

  let id = props.match.params.id
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [id])

  let { login, avatar_url, html_url, followers, following, created_at } = user
  return (
    <div className="back">
      <div className="custom-flex">
        <Image
          className="custom-width custom-flex2 details"
          src={avatar_url}
          roundedCircle
        />
        <div className="details">
          <p>Login Name - {login}</p>
          <p>Followers - {followers}</p>
          <p>Following - {following}</p>
          <p>Created - {created_at ? created_at.slice(0, 10) : created_at}</p>
          <Button variant="primary" onClick={() => window.open(html_url)}>
            Open Github
          </Button>
        </div>
      </div>
      <Link className="link" to="/">
        Back
      </Link>
    </div>
  )
}

export default User
