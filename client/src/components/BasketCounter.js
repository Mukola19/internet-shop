import React, { useState } from "react";
import cl from "classname";
import st from "./BasketCounter.module.css";
import { Button } from "react-bootstrap";

export const BasketCounter = ({ count, changeCounter }) => {
  const [disabled, setDisabled] = useState(false)



  return (
    <div>
      <div className={cl(st.counter)}>
        <Button onClick={() => changeCounter(-1, setDisabled)} className={st.sign} variant='dark'  disabled={disabled}>
          -
        </Button>
        <span className={st.count}>{count}</span>
        <Button onClick={() => changeCounter(1, setDisabled)} className={st.sign} variant='dark'   disabled={disabled}>
          +
        </Button>
      </div>
    </div>
  );
};
