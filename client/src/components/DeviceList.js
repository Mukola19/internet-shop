import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import st from './DeviceList.module.css'
import { addDeviceInBasket } from "../store/reducer/basketReducer";
import { useDispatch } from "react-redux";


export const DeviceList = ({ name, price, img, id , basketDevice, basketCount}) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  return (
    <Col md={3}>
      <Card className={st.card} >
        <span onClick={() => navigate('/device/' + id)} style={{cursor: 'pointer'}}>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + img } />
        <Card.Body >
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}
          </Card.Text>
        </Card.Body>
        </span>
      { basketDevice ? <Button variant="danger" className={st.button} onClick={() => alert('Be Be Be')}>Видалити</Button> :
        <Button variant="secondary" className={st.button} onClick={() => dispatch(addDeviceInBasket(id))}>В корзину</Button>

}      </Card>
    </Col>
  );
};

