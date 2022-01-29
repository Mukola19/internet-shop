import React from "react"
import { Form, FormLabel } from "react-bootstrap"
import { ErrorForm } from "./ErrorForm"

export const InputGrpup = ({ name, type, register, errors }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <FormLabel>
        <ErrorForm name={name} errors={errors} />
      </FormLabel>

      <Form.Control
        type={type || "text"}
        placeholder={"Enter" + name}
        {...register(name)}
      />
    </Form.Group>
  )
}
