import React from "react"
import { Button, FormControl, Table } from "react-bootstrap"

export const InfosForm = ({ infos, setInfos }) => {
  const changeInfo = (title, description, num) => {
    const value = infos.map((info) => {
      if (num === info.num) {
        return {
          title,
          description,
          num,
        }
      }
      return info
    })
    setInfos(value)
  }

  const deleteInfo = (num) => {
    const array = infos.filter((info) => info.num !== num)
    setInfos(array)
  }

  return (
    <Table responsive="sm">
      <tbody>
        {infos.map((info) => {
          return (
            <tr key={info.num}>
              <td>
                <FormControl
                  placeholder="Заголовок"
                  value={info.title}
                  onChange={(e) =>
                    changeInfo(e.target.value, info.description, info.num)
                  }
                ></FormControl>
              </td>
              <td>
                <FormControl
                  placeholder="Опис"
                  value={info.description}
                  onChange={(e) =>
                    changeInfo(info.title, e.target.value, info.num)
                  }
                ></FormControl>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  style={{ width: 35, paddingRight: 0, paddingLeft: 0 }}
                  onClick={() => deleteInfo(info.num)}
                >
                  ✘
                </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
