import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Form, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { login, registration } from '../store/reducer/userReducer'
import st from './Auth.page.css'

const schema = yup.object().shape({
  email: yup.string().email(' Ведіть email').required(' Поле обовʼязково'),
  password: yup
    .string()
    .min(4, ' Ведіть 4 символів')
    .max(4, ' Ведіть 4 символів')
    .required(' Поле обовʼязково'),
})

export const AuthPage = () => {
  let navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
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
    if (isLogin) {
      dispatch(login(data, navigate))
    } else {
      dispatch(registration(data, navigate))
    }
    reset()

  }

  return (
    <Card className={st.card}>
      <Card.Body>
        <Card.Title>{isLogin ? 'Вхід' : 'Регістрація'}</Card.Title>

        <Form onSubmit={handleSubmit(onsubmit)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Логін</Form.Label>
            <ErrorMessage errors={errors} name='email' />
            <Form.Control
              type='email'
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
            {isLogin ? 'Війти' : 'Заєструватись'}
          </Button>

          {isLogin ? (
            <p>
              Немає акаунта?{' '}
              <a onClick={() => setIsLogin(false)}>Заєструватись</a>
            </p>
          ) : (
            <p>
              Є акаунт? <a onClick={() => setIsLogin(true)}>Війти</a>
            </p>
          )}
        </Form>
      </Card.Body>
    </Card>
  )
}
