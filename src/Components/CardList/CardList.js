import React, { useContext } from "react"
import { dateContext } from "../App/App"
import CardItem from "../CardItem/CardItem"
import "./CardList.css"
import { Container, Row, Col } from "react-bootstrap"

//Receiving data using Context Api

function CardList() {
  let { users } = useContext(dateContext)
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
