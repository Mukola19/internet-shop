import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Form, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import st from './LoginPage.module.scss'
import { login } from '../store/reducer/adminReducer'

const schema = yup.object().shape({
  email: yup.string().required(' Поле обовʼязково'),
  password: yup
    .string()
    .required(' Поле обовʼязково'),
})

export const LoginPage = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onsubmit = data => {
    dispatch(login(data, navigate))
    reset()
  }

  return (
    <div className={st.logine}>
     <Card className={st.card}>
      <Card.Body>
        <Card.Title>Вхід для адміна</Card.Title>

        <Form onSubmit={handleSubmit(onsubmit)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Логін</Form.Label>
            <ErrorMessage errors={errors} name='email' />
            <Form.Control
              type='text'
              {...register('email')}
              placeholder='Enter email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Пароль </Form.Label>
            <ErrorMessage errors={errors} name='password' />
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('password')}
            />
          </Form.Group>

          <Button variant='success' type='submit'>
            Війти
          </Button>
        </Form>
      </Card.Body>
    </Card> 
    </div>
  )
}
