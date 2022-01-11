import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"

export const ModalForm = ({ onsubmit, show }) => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      {show ? (
        <Form onSubmit={handleSubmit(onsubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              placeholder="Enter name"
              {...register("name")}
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
