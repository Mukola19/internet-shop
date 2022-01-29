import React from "react"
import { useSelector } from "react-redux"
import { Tab, Tabs } from "react-bootstrap"
import { GroupList } from "../components/Devices/GroupList"
import st from "./CatalogPage.module.scss"

export const CatalogPage = () => {
  const state = useSelector(state => state)
  
  return (
    <div className={st.catalogPage}>
      <Tabs
        defaultActiveKey="devices"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="devices" title="Товари">
          <GroupList {...state.devices} mark='Device'/>
        </Tab>
        <Tab eventKey="types" title="Типи">
           <GroupList {...state.typesBrands.types} mark='Type'/>
        </Tab>
        <Tab eventKey="brands" title="Бренди">
           <GroupList {...state.typesBrands.brands} mark='Brand'/>  
        </Tab>
        <Tab eventKey="users" title="Користувачі">
       
        </Tab>
      </Tabs>
    </div>
  )
}
