import React, { useCallback, useEffect, useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BasketCounter } from "../../commons/Counter/Counter";
import {
  changeCounter,
  deleteFromBasket,
  getBasket,
} from "../../store/reducer/basketReducer";
import st from "./Basket.module.scss";

export const BasketPage = () => {
  const basket = useSelector((state) => state.basket.array);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <Modal show className={st.modal}>
      <ModalBody>
        <div className={st.list}>
          <div className={st.item}>
            <div className={st.buttons}>
              <span className={st.deleteBtn}>+</span>
              <span className={st.likeBtn}></span>
            </div>

            <div className={st.image}>
              <img src="item-1.png" alt="" />
            </div>
            {/* 
            <div className={st.description}>
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div> */}

            <div className={st.quantity}>
              <button className={st.plusBtn} type="button" name="button">
                +
              </button>
              <input type="text" name="name" value="1" />
              <button className={st.minusBtn} type="button" name="button">
                -
              </button>
            </div>

            <div className={st.totalPrice}>$549</div>
          </div>

          <div className={st.item}>
            <div className={st.buttons}>
              <span className={st.deleteBtn}></span>
              <span className={st.likeBtn}></span>
            </div>

            <div className={st.image}>
              <img src="item-1.png" alt="" />
            </div>

            <div className={st.description}>
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className={st.quantity}>
              <button className={st.plusBtn} type="button" name="button">
                +
              </button>
              <input type="text" name="name" value="1" />
              <button className={st.minusBtn} type="button" name="button">
                -
              </button>
            </div>
            <div className={st.totalPrice}>$549</div>
          </div>

          <div className={st.item}>
            <div className={st.buttons}>
              <span className={st.deleteBtn}></span>
              <span className={st.likeBtn}></span>
            </div>

            <div className={st.image}>
              <img src="item-1.png" alt="" />
            </div>

            <div className={st.description}>
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className={st.quantity}>
              <button className={st.plusBtn} type="button" name="button">
                +
              </button>
              <input type="text" name="name" value="1" />
              <button className={st.minusBtn} type="button" name="button">
                -
              </button>
            </div>
            <div className={st.totalPrice}>$549</div>
          </div>

          <div className={st.item}>
            <div className={st.buttons}>
              <span className={st.deleteBtn}></span>
              <span className={st.likeBtn}></span>
            </div>

            <div className={st.image}>
              <img src="item-1.png" alt="" />
            </div>

            <div className={st.description}>
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className={st.quantity}>
              <button className={st.plusBtn} type="button" name="button">
                +
              </button>
              <input type="text" name="name" value="1" />
              <button className={st.minusBtn} type="button" name="button">
                -
              </button>
            </div>
            <div className={st.totalPrice}>$549</div>
          </div>

          <div className={st.item}>
            <div className={st.buttons}>
              <span className={st.deleteBtn}></span>
              <span className={st.likeBtn}></span>
            </div>

            <div className={st.image}>
              <img src="item-1.png" alt="" />
            </div>

            <div className={st.description}>
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className={st.quantity}>
              <button className={st.plusBtn} type="button" name="button">
                +
              </button>
              <input type="text" name="name" value="1" />
              <button className={st.minusBtn} type="button" name="button">
                -
              </button>
            </div>
            <div className={st.totalPrice}>$549</div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

{
  /* <div className={st.shoppingCart}>
<div className={st.title}>Shopping Bag</div>




</div> */
}

// <Container>
//   <Row className={st.row}>
//     <ListGroup variant="flush">
//       {basket.length ? (
//         basket.map((device) => (
//           <ListGroup.Item className={st.listGroup} key={device.id}>
//             <Image src={process.env.REACT_APP_API_URL + device.img} />
//             <h4>{device.name}</h4>
//             <p>{device.price}</p>
//             <BasketCounter
//               count={device.count}
//               changeCounter={(count, setDisabled) =>
//                 dispatch(changeCounter(device.deviceId, count, setDisabled))
//               }
//             />
//             <Button variant="secondary">Замовити</Button>
//             <Button
//               variant="danger"
//               onClick={() => dispatch(deleteFromBasket(device.deviceId))}
//             >
//               Видалити
//             </Button>
//           </ListGroup.Item>
//         ))
//       ) : (
//         <ListGroup.Item className={st.listGroup}>
//           <h1 >Ви нічого не вибрали</h1>
//         </ListGroup.Item>
//       )}
//     </ListGroup>
//   </Row>
// </Container>
