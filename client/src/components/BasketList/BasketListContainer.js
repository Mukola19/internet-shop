import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter,  deleteFromBasket } from '../../store/reducer/basketReducer'
import { BasketList } from './BasketList'

export const BasketListContainer = ({ deviceId, ...props }) => {
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()

  const deleteDevice = () => {
    dispatch(deleteFromBasket(deviceId, setDisabled))
  }
  const counterFunc = (data) => {
    dispatch(changeCounter({ deviceId, ...data }))
  }

  return (
    <BasketList
      {...props}
      changeCounter={counterFunc}
      deleteDevice={deleteDevice}
      disabled={disabled}
    />
  )
}
