import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { ModalForm } from "../../commons/ModalForm"
import { RadioButtons } from "../../commons/RadioButtons"

export const ModalCommon = ({ handleClose, show, title, create }) => {
  const [isActive, setIsActive] = useState(0)
  const dispatch = useDispatch()

  const onsubmit = data => {
    dispatch(create(data, setIsActive))
    
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        <RadioButtons isActive={isActive} setIsActive={setIsActive} />
      </Modal.Header>

      <Modal.Body>
          {!isActive ? <h1>Bla Bla Bla</h1> : null}
        <ModalForm onsubmit={onsubmit} show={isActive === 1} />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Скасувати
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
