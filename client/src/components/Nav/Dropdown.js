import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import st from "./Nav.module.css"


export const Dropdown = ({ title, data, onclick }) => {
  return (
    <NavDropdown title={title} id='navbarScrollingDropdown' className={st.dropdown}>
      {data.map(d => (
        <NavDropdown.Item onClick={() => onclick(d.id)} key={d.id}>{d.name}</NavDropdown.Item>
      ))}

      <NavDropdown.Divider />
    </NavDropdown>
  )
}
