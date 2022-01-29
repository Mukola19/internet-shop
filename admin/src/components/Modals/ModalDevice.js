import React from "react"
import { Modal } from "react-bootstrap";
import { DeviceForm } from "./DeviceForm";

export const ModalDevice = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Товар</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <DeviceForm/>
      </Modal.Body>
    </Modal>
  )
}
