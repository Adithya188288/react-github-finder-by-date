import React from "react"
import { Nav, Navbar as NavbarBootstrap } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <NavbarBootstrap
      className="justify-content-nav"
      bg="dark"
      expand="sm"
      variant="dark"
    >
      <NavbarBootstrap.Brand>Github Finder By Date</NavbarBootstrap.Brand>
      <Nav className="nav-flex-sm">
        <Link className="padding white" to="/">
          Home
        </Link>
        <Link className="padding white" to="/about">
          About
        </Link>
      </Nav>
    </NavbarBootstrap>
  )
}

export default Navbar
