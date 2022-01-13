import React, { useState } from "react"
import { ModalForm } from "../../commons/ModalForm"

export const ModalCommon = ({ create, isActive }) => {
  return <ModalForm create={create} isActive={isActive} />
}
