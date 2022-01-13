import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'

export const Dropdown = ({ title, data, onclick }) => {
  const [active, setActive] = useState('')
 

  const toChoose = ({ name, id }) => {
    onclick(id)
    setActive(name)
  }
  return (
    <NavDropdown
      title={ active || title}
      id='navbarScrollingDropdown'
      style={{ marginLeft: 5, width: 70 }}
    >
      <NavDropdown.Item onClick={() => toChoose({ id: null, name: title })}>
        Відмінити
      </NavDropdown.Item>
      {data.map((d) => (
        <NavDropdown.Item onClick={() => toChoose(d)} key={d.id}>
          {d.name}
        </NavDropdown.Item>
      ))}

    </NavDropdown>
  )
}
