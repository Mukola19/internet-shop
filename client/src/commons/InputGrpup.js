import React from 'react'
import { Form } from 'react-bootstrap'

export const InputGrpup = ({name, type, register}) => {
  return (
    <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Control
        type={type || 'text'}
        placeholder={'Enter' + name}
        {...register(name)}
      />
    </Form.Group>
  )
}
