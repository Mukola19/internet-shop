import React, { useState } from "react"
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Dropdown } from "../../commons/Dropdown"
import { InputGrpup } from "../../commons/InputGrpup"
import { ModalForm } from "../../commons/ModalForm"
import { RadioButtons } from "../../commons/RadioButtons"
import { createDevice } from "../../store/reducer/devicesReducer"

export const ModalDevice = ({ handleClose, show  }) => {
  const [isActive, setIsActive] = useState(0)
  const [typeId, setTypeId] = useState(0)
  const [brandId, setBrandId] = useState(0)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const typesBrands = useSelector(state => state.typesBrands)


  const onsubmit = data => {
    dispatch(createDevice({...data,typeId,brandId }))
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
          <ButtonGroup style={{ marginBottom:10 }}>
          <Dropdown data={typesBrands.types}  title='Тип' onclick={id => setTypeId(id)}/>
          <Dropdown data={typesBrands.brands}  title='Бренд' onclick={id => setBrandId(id)}/>
          </ButtonGroup>

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
