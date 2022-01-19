import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cl from 'classname'
import st from './Nav.module.css'
import { useDispatch } from 'react-redux'
import { $authHost } from '../../http/index'


export const NavForm = ({ title, data, onclick }) => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

const onsubmit = (data) => {
      // $authHost.post('/user/raising_admin',{codeKey:'TROPIK12'} ) 
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
