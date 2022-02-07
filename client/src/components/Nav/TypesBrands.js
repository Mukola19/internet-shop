import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Select } from "../../commons/Select"
import { getDevices } from "../../store/reducer/devicesReducer"
import { receiptDevices } from "../../store/reducer/typesBrandsReducer"

export const TypesBrands = () => {
  const typesBrands = useSelector((state) => state.typesBrands)
  const dispatch = useDispatch()

  const brandOnClick = brandId => {
    dispatch(receiptDevices({ brandId }))
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: 250 }}
    >
      <Select title="Бренд" data={typesBrands.brands} onclick={brandOnClick} />
    </div>
  )
}
