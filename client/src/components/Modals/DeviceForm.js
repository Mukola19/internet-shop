import React, { useState } from 'react'
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from '../../commons/Dropdown'
import { InputGrpup } from '../../commons/InputGrpup'

export const DeviceForm = ({ onsubmit, isActive }) => {
  const typesBrands = useSelector((state) => state.typesBrands)
  const [typeId, setTypeId] = useState(0)
  const [brandId, setBrandId] = useState(0)
  const { register, handleSubmit } = useForm()

  
  const localSubmit = data => {
    onsubmit({ ...data, typeId, brandId })
  }
  
  if (isActive === 1) {
    return (
      <Form onSubmit={handleSubmit(localSubmit)}>
        <ButtonGroup style={{ marginBottom: 10 }}>
          <Dropdown
            data={typesBrands.types}
            title='Тип'
            onclick={(id) => setTypeId(id)}
          />
          <Dropdown
            data={typesBrands.brands}
            title='Бренд'
            onclick={(id) => setBrandId(id)}
          />
        </ButtonGroup>

        <InputGrpup name='name' register={register} />
        <InputGrpup name='price' type='number' register={register} />
        <InputGrpup name='img' type='file' register={register} />

        <Button variant='secondary' type='submit'>
          Додати
        </Button>
      </Form>
    )
  }

  return null
}
