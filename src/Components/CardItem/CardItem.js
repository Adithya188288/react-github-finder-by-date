import React, { Fragment } from "react"
import { Card, Button } from "react-bootstrap"
import PropTypes from "prop-types"

//proptype - denote what type of props this component will recieve.
// It will shows us a warning if we pass some other prop-type
CardItem.propTypes = {
  usersInfo: PropTypes.object.isRequired
}

function CardItem({ usersInfo }) {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={usersInfo.avatar_url} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{usersInfo.login}</Card.Title>
          <Card.Text>User Score - {usersInfo.score}</Card.Text>
          <Button
            variant="primary" //opens the user github profile in a new window
            onClick={() => window.open(usersInfo.html_url)}
          >
            Open Profile
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default CardItem
