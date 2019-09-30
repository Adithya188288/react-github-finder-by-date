import React from "react"
import CardItem from "../CardItem/CardItem"
import "./CardList.css"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

//proptype - denote what type of props this component will recieve.
// It will shows us a warning if we pass some other prop-type
CardList.propTypes = {
  users: PropTypes.array.isRequired
}

function CardList({ users }) {
  return (
    <Container>
      <Row className="justify-content">
        {users.map((e, i) => {
          return (
            <Col key={i} className="m2" lg="auto" md="auto" sm="auto" xs="auto">
              <CardItem usersInfo={users[i]} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CardList
