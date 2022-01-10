import React from "react"
import { useSelector } from "react-redux"
import { Dropdown } from "./Dropdown"

export const TypesBrands = () => {
  const types = useSelector((state) => state.types)

    const typeOnClick = id => {
        console.log(id)
    }

  return (
    <>
      <Dropdown title="Бренд" data={[]} onclick={() => null} />
      <Dropdown title="Тип" data={types.array} onclick={typeOnClick} />
    </>
  )
}
