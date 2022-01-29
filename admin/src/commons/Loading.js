import React from "react";
import { Spinner } from "react-bootstrap";
import st from "./Loading.module.css";

export const Loading = () => (
  <Spinner
    animation="border"
    variant="light"
    role="status"
    className={st.spiner}
  >
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
