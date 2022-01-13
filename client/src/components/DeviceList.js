import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import st from './DeviceList.module.css'


export const DeviceList = ({ name, price, img, id }) => {
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
        <Button variant="secondary" className={st.button}>В корзину</Button>

      </Card>
    </Col>
  );
};
