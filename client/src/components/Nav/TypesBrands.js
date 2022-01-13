import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from '../../commons/Dropdown'
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
    <>
      <Dropdown
        title='Бренд'
        data={typesBrands.brands}
        onclick={brandOnClick}
      />
      <Dropdown title='Тип' data={typesBrands.types} onclick={typeOnClick} />
    </>
  )
}
