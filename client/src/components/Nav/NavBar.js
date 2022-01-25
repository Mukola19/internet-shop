import React, { useEffect } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import {  useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { NavForm } from "./NavForm"
import { logout } from "../../store/reducer/userReducer"
import { TypesBrands } from "./TypesBrands"
import { getBasket } from "../../store/reducer/basketReducer"
import st from "./Nav.module.scss"

export const NavBar = ({ isAuth, admin, adminMode }) => {
  let navigate = useNavigate()
  const locatin = useLocation()
  const dispatch = useDispatch()



  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/shop")} className={st.link}>Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

       { adminMode ? <h1>Адмін панель</h1> : <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {locatin.pathname !== '/auth' ?<div className={st.selectForm}>
            <TypesBrands />
            <NavForm />
            </div>: 
            null}
                
          </Nav>}

          {isAuth ? <Button variant="secondary" onClick={() => navigate('/basket')}>Корзина</Button> : null}


          {admin && isAuth ? (
            <Button variant="secondary" onClick={() => navigate('/management')}>Адмін панель</Button>
          ) : null}

          {!isAuth ? (
            <Button variant="success" onClick={() => navigate("/auth")}>
              Вхід
            </Button>
          ) : (
            <Button variant="danger" onClick={() => dispatch(logout(navigate))}>
              Вихід
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
