import React from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import st from "./Header.module.scss"



export const Header = ({ isAdmin, isAuth }) => {
  return (
    <div className={st.header}>
      <Navbar  expand="lg" >
        <Container fluid>
          <Navbar.Brand>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            {!isAdmin ? "Ви адміністратор" : "Ви не адміністратор"}
              
            </Nav>

            {!isAdmin && isAuth ?  null  : <Button >Стати адміни</Button> }
            {!isAuth ? <Button>Війти</Button> : <Button>Вийти</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
