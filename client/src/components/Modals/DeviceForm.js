import React, { useState } from 'react'
import {
  Button,
  Form,
  FormControl,
  Table,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select } from '../../commons/Select'
import { InputGrpup } from '../../commons/InputGrpup'
import { InfosForm } from './InfosForm'

const schema = yup.object().shape({
  name: yup
    .string()
    .max(40, ' Менше 40 символів')
    .required(' Поле обовʼязковe'),
  price: yup.number().required(' Поле обовʼязково').min(1, 'Поле обовʼязково'),
})

export const DeviceForm = ({ onsubmit, isActive }) => {
  const typesBrands = useSelector((state) => state.typesBrands)
  const [typeId, setTypeId] = useState(0)
  const [brandId, setBrandId] = useState(0)
  const [infos, setInfos] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const addInfo = () => {
    setInfos([...infos, { num: Date.now(), title: '', description: '' }])
  }

  const localSubmit = data => {
    onsubmit({ ...data, typeId, brandId, infos })
  }

  if (isActive === 1) {
    return (
      <Form onSubmit={handleSubmit(localSubmit)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 200,
          }}
        >
          <Select
            data={typesBrands.types}
            title='Тип'
            onclick={(id) => setTypeId(id)}
          />
          <Select
            data={typesBrands.brands}
            title='Бренд'
            onclick={(id) => setBrandId(id)}
          />
        </div>
        <InputGrpup name='name' register={register} errors={errors} />
        <InputGrpup
          name='price'
          type='number'
          register={register}
          errors={errors}
        />

        <InputGrpup
          name='img'
          type='file'
          register={register}
          errors={errors}
        />

        <InfosForm infos={infos} setInfos={setInfos} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='success' onClick={addInfo}>
            Додати опис
          </Button>
          <Button variant='secondary' type='submit'>
            Додати
          </Button>
        </div>
      </Form>
    )
  }

  return null
}









