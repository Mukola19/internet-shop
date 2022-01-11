import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cl from 'classname'
import st from './Nav.module.css'


export const NavForm = ({ title, data, onclick }) => {
  const { register, handleSubmit } = useForm()

const onsubmit = (data) => {
    console.log(data)
}

  return (
    <Form className={cl('d-flex', st.form)} onSubmit={handleSubmit(onsubmit)}>
      <FormControl
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        {...register('name')}
      />
      <Button variant='secondary' type='submit'>Search</Button>
    </Form>
  )
}
