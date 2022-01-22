import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from '../../commons/Select'
import { getDevices } from '../../store/reducer/devicesReducer'

export const TypesBrands = () => {
  const typesBrands = useSelector((state) => state.typesBrands)
  const dispatch = useDispatch()

  const typeOnClick = typeId => {
    dispatch(getDevices( typeId, null))
  }

  const brandOnClick = brandId => {
    dispatch(getDevices(null, brandId ))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width:220 }}>
      <Select
        title='Бренд'
        data={typesBrands.brands}
        onclick={brandOnClick}
      />
      <Select title='Тип' data={typesBrands.types} onclick={typeOnClick} />
      </div>
  )
}
