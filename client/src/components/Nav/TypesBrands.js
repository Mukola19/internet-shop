import React from "react"
import { useSelector } from "react-redux"
import { Dropdown } from "../../commons/Dropdown"

export const TypesBrands = () => {
  const typesBrands = useSelector((state) => state.typesBrands)

    const typeOnClick = id => {
        console.log(id)
    }

    const brandOnClick = id => {
      console.log(id)
  }

  return (
    <>
      <Dropdown title="Бренд" data={typesBrands.brands} onclick={brandOnClick} />
      <Dropdown title="Тип" data={typesBrands.types} onclick={typeOnClick} />
    </>
  )
}
