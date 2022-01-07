import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export const NavForm = ({ title, data, onclick }) => {
  const { register, handleSubmit } = useForm()

const onsubmit = (data) => {
    console.log(data)
}

  return (
    <Form className='d-flex' onSubmit={handleSubmit(onsubmit)}>
      <FormControl
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        {...register('name')}
      />
      <Button variant='outline-success' type='submit'>Search</Button>
    </Form>
  )
}
