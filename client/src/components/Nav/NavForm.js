import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cl from 'classname'
import st from './Nav.module.scss'
import { useDispatch } from 'react-redux'
import { $authHost } from '../../http/index'


export const NavForm = ({ title, data, onclick }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

const onchange = text => {
  console.log(text)
  setInput(text)
}

  return (
    <>
    <Form className={cl('d-flex', st.form)} >
      <FormControl
      value={input}
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        onChange={e => onchange(e.target.value)}
      />
      <Button variant="outline-light">Search</Button>
    </Form>


      {/* <ul className={st.searchList}>
        <li>sfsdfsdfsdf</li>
        <hr/>
      </ul> */}
    </>
  )
}
