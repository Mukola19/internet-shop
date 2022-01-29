import React from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export const Links = () => {
  const navigate = useNavigate()
  return (
    <ListGroup style={{ gridArea: "n", margin:5, cursor:'pointer' }}>
      <ListGroup.Item onClick={() => navigate('/catalog')}>Каталог</ListGroup.Item>
      <ListGroup.Item onClick={() => navigate('/')}>Статистика</ListGroup.Item>
      <ListGroup.Item onClick={() => navigate('/settings')}>Настройки</ListGroup.Item>
      {/* <NavLink to='/catalog' className='nav-link' >Каталог </NavLink> */}
    </ListGroup>
  );
};
