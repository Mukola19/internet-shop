import React, { useState } from 'react'
import { Button, Image, Table } from 'react-bootstrap'
import { ModalConteiner } from '../Modals/ModalConteiner'
import { ModalDevice } from '../Modals/ModalDevice'
import st from './DevicesList.module.scss'

export const GroupList = ({ count, array, mark }) => {
  const [showDevice, setShowDevice] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showType, setShowType] = useState(false)


  const changeState = () => {
    switch (mark) {
      case 'Type':
        return setShowType(true)

      case 'Brand':
        return setShowBrand(true)

      case 'Device':
        return setShowDevice(true)

      default:
        break
    }
  }

  return (
    <div>
      <h3>Вся к-сть: {count}</h3>
      <Button onClick={changeState}>Додати</Button>

      <Table responsive='sm' className={st.table}>
        <thead>
          <tr>
            <th>№</th>
            {mark === 'Device' ? (
              <>
                <th>Фото</th>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Бренд</th>
                <th>Тип</th>
                <th>Рейтинг</th>
              </>
            ) : (
              <>
                <th>Назва</th>
              </>
            )}
            <th>Видалення</th>
          </tr>
        </thead>
        <tbody>
          {array
            ? array.map((d, i) => (
                <tr key={d.id}>
                  <td>{i + 1}</td>
                  {mark === 'Device' ? (
                    <>
                      <td>
                        <img src={process.env.REACT_APP_API_URL + d.img} />
                      </td>
                      <td>{d.name}</td>
                      <td>{d.price}</td>
                      <td>{d.typeId}</td>
                      <td>{d.brandId}</td>
                      <td>{d.rating}</td>
                    </>
                  ) : (
                    <td>{d.name}</td>
                  )}

                  <td>
                    <span >✘</span>
                  </td>
                </tr>
              ))
            : 'Тутика нічого нема'}
        </tbody>
      </Table>
      <ModalConteiner showBrand={showBrand} onHide={setShowBrand} mark={mark}/>
      <ModalConteiner showType={showType} onHide={setShowType}  mark={mark}/>
      <ModalConteiner showDevice={showDevice} onHide={setShowDevice} mark={mark} />
    </div>
  )
}
