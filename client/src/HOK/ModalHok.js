import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalHok = Component => {
  return ({ show, onHide, title, ...props }) => (
 <Modal show={show} onHide={onHide}>
  <Modal.Header closeButton>
    <Modal.Title>{title}</Modal.Title>
  </Modal.Header>
  <Modal.Body><Component {...props}/></Modal.Body>
  
</Modal>)
}
