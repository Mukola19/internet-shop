import React from 'react'
import { NavDropdown } from 'react-bootstrap'

export const Dropdown = ({ title, data, onclick }) => {
  return (
    <NavDropdown title={title} id='navbarScrollingDropdown'>
      {data.map(d => (
        <NavDropdown.Item onClick={() => onclick(d.id)}>{d.name}</NavDropdown.Item>
      ))}

      <NavDropdown.Divider />
    </NavDropdown>
  )
}
