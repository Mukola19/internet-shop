import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";



export const DeviceList = ({ name, price, info, img }) => {
  return (
    <Col md={3}>
      <Card style={{ width: "13rem" }}>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + `/${img}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="secondary">В корзину</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
