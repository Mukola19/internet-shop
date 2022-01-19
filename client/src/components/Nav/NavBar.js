import React, { useEffect } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import {  useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { NavForm } from "./NavForm"
import st from "./Nav.module.css"
import { logout } from "../../store/reducer/userReducer"
import { TypesBrands } from "./TypesBrands"
import { getBasket } from "../../store/reducer/basketReducer"

export const NavBar = ({ isAuth, admin, adminMode }) => {
  let navigate = useNavigate()
  const locatin = useLocation()
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

       {adminMode ? <h1>Адмін панель</h1> : <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {locatin.pathname !== '/auth' ?<>
            <TypesBrands />
            <NavForm />
            </>: 
            null}
                
          </Nav>}

          {isAuth ? <Button variant="secondary" onClick={() => dispatch(getBasket(navigate))}>Корзина</Button> : null}


          {admin && isAuth ? (
            <Button variant="secondary" onClick={() => navigate('/management')}>Адмін панель</Button>
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
