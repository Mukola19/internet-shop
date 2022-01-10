import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import st from './Auth.page.css'
import { login } from '../store/reducer/userReducer'
import { Button, Form, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  let navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()



 
  const onsubmit = (data) => {
    if (isLogin) {
      dispatch(login(data, navigate))
    } else {
      // dispatch(login(data))
      console.log('Ops')
    }
  }

  return (
    <Card className={st.card}>
      <Card.Body>
        <Card.Title>{isLogin ? 'Вхід' : 'Регістрація'}</Card.Title>

        <Form onSubmit={handleSubmit(onsubmit)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Логін</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('email')}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Пароль</Form.Label>
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
