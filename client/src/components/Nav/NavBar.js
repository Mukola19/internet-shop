import React, { useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import {  NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { NavForm } from './NavForm'
import { logout } from '../../store/reducer/userReducer'
import { TypesBrands } from './TypesBrands'
import st from './Nav.module.scss'

export const NavBar = ({ isAuth }) => {
  let navigate = useNavigate()
  const locatin = useLocation()
  const dispatch = useDispatch()



  return (
    <Navbar  expand='lg' className={st.nav} >
      <Container fluid>
        <NavLink to='/shop' className={st.link}>Store</NavLink>
        {/* <Navbar.Brand onClick={() => navigate('/shop')} className={st.link} >Store</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>

          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {locatin.pathname !== '/auth' ?<div className={st.selectForm}>
            <TypesBrands />
            <NavForm />
            </div>: 
            null}
                
          </Nav>

          {isAuth ? <Button variant='outline-light' onClick={() => navigate('/basket')}>Корзина</Button> : null}


 

          {!isAuth ? (
            <Button variant='outline-success' onClick={() => navigate('/auth')}>
              Вхід
            </Button>
          ) : (
            <Button variant='outline-danger' onClick={() => dispatch(logout(navigate))}>
              Вихід
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
