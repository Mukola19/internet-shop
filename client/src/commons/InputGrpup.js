import React from "react"
import { Form, FormLabel } from "react-bootstrap"
import { ErrorForm } from "./ErrorMessage/ErrorForm"

export const InputGrpup = ({ name, type, register, errors, label, textarea, validate }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <FormLabel>
        <ErrorForm name={name} errors={errors} />
        <h5>{label}</h5>
      </FormLabel>

      {textarea ? (
        <Form.Control
          as="textarea"
          placeholder={label}
          {...register(name, validate)}
          rows={3}
        />
      ) : (
        <Form.Control
          type={type || "text"}
          placeholder={label}
          {...register(name, validate)}
        />
      )}
    </Form.Group>
  )
}
