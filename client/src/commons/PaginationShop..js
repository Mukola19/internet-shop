import React from "react"
import { Pagination } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getDevices } from "../store/reducer/devicesReducer"

export const PaginationShop = ({ count, page, limit }) => {
  const dispatch = useDispatch()
let countPage = count / limit

  let items = []
  for (let i = 1; i <= countPage; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === page}
        onClick={() => dispatch(getDevices(null, null, i))}
      >
        {i}
      </Pagination.Item>
    )
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )

  return paginationBasic
}
