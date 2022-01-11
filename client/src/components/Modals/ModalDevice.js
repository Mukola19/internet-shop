import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { InputGrpup } from "../../commons/InputGrpup"
import { ModalForm } from "../../commons/ModalForm"
import { RadioButtons } from "../../commons/RadioButtons"

export const ModalDevice = ({ handleClose, show  }) => {
  const [isActive, setIsActive] = useState(0)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()


  const onsubmit = data => {
console.log(data);    
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>titl</Modal.Title>
        <RadioButtons isActive={isActive} setIsActive={setIsActive} />
      </Modal.Header>

      <Modal.Body>
          {!isActive ? <h1>Bla Bla Bla</h1> : null}

          <Form onSubmit={handleSubmit(onsubmit)}>

          <InputGrpup name='name' register={register}/>
          <InputGrpup name='price' type='number' register={register}/>
          <InputGrpup name='img' type='file'   register={register}/>
               
          

          <Button variant="secondary" type="submit">
            Додати
          </Button>
        </Form>









      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Скасувати
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
