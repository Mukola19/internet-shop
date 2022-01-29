import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

export const ErrorForm = ({ name, errors }) => (
  <ErrorMessage
    name={name}
    errors={errors}
    render={({ message }) => (
      <span style={{ color: 'red' }}>
        {message.length > 30 ? null : message}
      </span>
    )}
  />
)
