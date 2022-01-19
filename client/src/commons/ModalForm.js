import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'


export const ModalForm = ({ create, isActive }) => {
  const { register, handleSubmit , formState: { errors }} = useForm()

  return (
    <>
      {isActive === 1 ? (
        <Form onSubmit={handleSubmit(create)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <ErrorMessage name='name' errors={errors}/>
            <Form.Control
              type="name"
              placeholder="Enter name"
              {...register("name", { required: ' Обовʼязково'})}
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Додати
          </Button>
        </Form>
      ) : null}
    </>
  )
}
