import React, { useState } from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import st from "./Select.module.scss"

export const Select = ({ title, data, onclick }) => {
  const [active, setActive] = useState("")

  const toChoose = ({ name, id }) => {
    onclick( id )
    setActive(name)
  }
  return (
    <Dropdown className={st.drop} >
      <Dropdown.Toggle variant="outline-link" id="dropdown-basic" className={st.toggle}>
        <span className={st.toggleSpan}>{active || title}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className={st.toggleMenu}>
        <Dropdown.Item onClick={() => toChoose({ id: null, name: title })}>
          Відмінити
        </Dropdown.Item>
        {data.map((d) => (
          <Dropdown.Item onClick={() => toChoose(d)} key={d.id}>
            {d.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
