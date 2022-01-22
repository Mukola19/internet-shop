import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { RadioButtons } from "../../commons/RadioButtons"
import { ModalCommon } from "./ModalCommon"
import { ModalDevice } from "./ModalDevice"
import { createBrand, createType } from "../../store/reducer/typesBrandsReducer"
import { createDevice } from "../../store/reducer/devicesReducer"
import { useDispatch } from "react-redux"

export const ModalContainer = ({ handleClose, show, flag }) => {
  const [isActive, setIsActive] = useState(1)
  const dispatch = useDispatch()


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{flag}</Modal.Title>
        <RadioButtons isActive={isActive} setIsActive={setIsActive} />
      </Modal.Header>
      <Modal.Body>
        <ModalSwith
          flag={flag}
          isActive={isActive}
          createType={form => dispatch(createType(form, setIsActive))}
          createBrand={form => dispatch(createBrand(form, setIsActive))}
          createDevice={form => dispatch(createDevice(form, setIsActive))}
        />
      </Modal.Body>
    </Modal>
  )
}

const ModalSwith = ({
  flag,
  createBrand,
  createType,
  createDevice,
  isActive,
}) => {
  switch (flag) {
    case "Type":
      return <ModalCommon create={createType} isActive={isActive} />
    case "Brand":
      return <ModalCommon create={createBrand} isActive={isActive} />
    case "Device":
      return <ModalDevice create={createDevice} isActive={isActive} />
    default:
      return null
  }
}
