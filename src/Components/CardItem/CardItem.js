import React, { Fragment } from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./CardItem.css"

//proptype - denote what type of props this component will recieve.
// It will shows us a warning if we pass some other prop-type
CardItem.propTypes = {
  usersInfo: PropTypes.object.isRequired
}

function CardItem({ usersInfo }) {
  // console.log(usersInfo)
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={usersInfo.avatar_url} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{usersInfo.login}</Card.Title>
          <Card.Text>User Score - {usersInfo.score}</Card.Text>
          <Link to={`/user/${usersInfo.login}`} style={{ color: "blue" }}>
            View
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default CardItem
