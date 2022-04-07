import React, {  useEffect } from 'react'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Impressions } from '../../components/Impressions/Impressions'
import { StaticRating } from '../../commons/Rating/StaticRating'
import { addDeviceInBasket,  deleteFromBasket } from '../../store/reducer/basketReducer'
import { getOneDevice } from '../../store/reducer/devicesReducer'
import { receivingDevice } from '../../store/selectors/device-selector'
import { getIsAuth } from '../../store/selectors/user-selector'
import st from './Device.module.scss'



export const DevicePage = () => {
  const device = useSelector(receivingDevice)
  const isAuth = useSelector(getIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()



  useEffect(() => {
    dispatch(getOneDevice(id))
  }, [id])

  const onclick = () => {
    if (isAuth) {
      device.basketDevice
        ? dispatch(deleteFromBasket(id))
        : dispatch(addDeviceInBasket(id))
      return
    }
    navigate('/auth')
  }

  if (device) {
    return (
      <Container>
        <Row className={st.row}>
          <Col md={4}>
            <Image
              variant='top'
              src={process.env.REACT_APP_API_URL + device.img}
              width={500}
              className={st.img}
            />
            <div className={st.title}>
              <div>
                <h2>{device.name}</h2>
                <p>{device.price}</p>
              </div>
              <StaticRating rating={device.rating} />
              <Button
                variant={device.basketDevice ? 'danger' : 'secondary'}
                className={st.button}
                onClick={onclick}
              >
                {device.basketDevice ? 'Видалити' : 'В корзину'}
              </Button>

            </div>
            <Impressions  deviceId={device.id} impression={device.impression}/>

          </Col>
          <Col md={{ span: 4, offset: 3 }}>
            <Container>
              <h3>Характеристики</h3>
              <ul>
                {device.infos
                  ? device.infos.map((info) => (
                      <li key={info.id}>
                        {info.title} : {info.description}
                      </li>
                    ))
                  : null}
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }

  return null
}
