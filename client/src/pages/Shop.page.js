import React from "react"
import { useSelector } from "react-redux"
import { Container, Row } from "react-bootstrap"
import { DeviceList } from "../components/DeviceList"

export const ShopPage = () => {
  const devices = useSelector((state) => state.devices)




  return (
    <Container>
      <Row>
            {devices.array.map((device) => (
              <DeviceList {...device} key={device.id} />
            ))}
      </Row>
    </Container>
  )
}
