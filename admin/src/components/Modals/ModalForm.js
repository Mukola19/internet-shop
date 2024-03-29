import React from "react"
import { Button, Form, FormLabel } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
// import { ErrorForm } from "./ErrorForm"
import { useDispatch } from "react-redux"


export const ModalForm = ({ create }) => {
  const { register, handleSubmit , formState: { errors }} = useForm()


  return (
        <Form onSubmit={handleSubmit(create)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FormLabel>
            {/* <ErrorForm name='name' errors={errors}/> */}
            </FormLabel>
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
  )
}
