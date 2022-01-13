import React from "react"

import { DeviceForm } from "./DeviceForm"

export const ModalDevice = ({ create, isActive }) => {
  return <DeviceForm isActive={isActive} onsubmit={create} />
}
