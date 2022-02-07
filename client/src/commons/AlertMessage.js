import React from 'react'
import { Alert } from 'react-bootstrap'

export const AlertMessage = ({ text }) => {
  return <Alert variant={'light'} style={{ marginTop: 10}}><h4>{text}</h4></Alert>
}
