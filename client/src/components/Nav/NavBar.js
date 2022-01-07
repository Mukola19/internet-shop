import React from 'react'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { Dropdown } from './Dropdown'
import { NavForm } from './NavForm'

export const NavBar = () => {
  let navigate = useNavigate()
  const { isAuth, isAdmin } = {
    isAuth: false,
    isAdmin: true,
  }

  return (
    <Navbar bg='secondary' expand='lg'>
      <Container fluid>
        <Navbar.Brand onClick={() => navigate('/shop')}>Store</Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarScroll' />

        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {isAuth ? (
              <>
                <Dropdown title='Бренд' data={[]} onclick={() => null} />
                <Dropdown title='Тип' data={[]} onclick={() => null} />

                <NavForm />
              </>
            ) : null}
          </Nav>

          {isAuth ? <Button variant='secondary'>Корзина</Button> : null}
          {isAdmin && isAuth ? (
            <Button variant='secondary'>Адмін панель</Button>
          ) : null}

          {!isAuth ? (
            <Button variant='success' onClick={() => navigate('/auth')}>Вхід</Button>
          ) : (
            <Button variant='danger'>Вихід</Button>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
