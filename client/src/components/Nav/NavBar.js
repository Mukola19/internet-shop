import React, { useEffect } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Dropdown } from "./Dropdown"
import { NavForm } from "./NavForm"
import { logout } from "../../store/reducer/userReducer"
import { TypesBrands } from "./TypesBrands"

export const NavBar = ({ isAuth, admin }) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const exit = () => {
    dispatch(logout(navigate))
  }

  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/shop")}>Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isAuth ? (
              <>
                <TypesBrands />
                <NavForm />
              </>
            ) : null}
          </Nav>

          {isAuth ? <Button variant="secondary">Корзина</Button> : null}
          {admin && isAuth ? (
            <Button variant="secondary">Адмін панель</Button>
          ) : null}

          {!isAuth ? (
            <Button variant="success" onClick={() => navigate("/auth")}>
              Вхід
            </Button>
          ) : (
            <Button variant="danger" onClick={exit}>
              Вихід
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
