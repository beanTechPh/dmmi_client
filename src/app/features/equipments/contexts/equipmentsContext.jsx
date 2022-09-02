import React, { createContext, Component } from 'react';
import Equipment from '../../../core/models/equipment';
import { getFetch } from '../../../core/network/fetchData';

export const EquipmentsContext = createContext();

class EquipmentsContextProvider extends Component {
  state = { 
    equipments: [],
    equipmentsPage: 1,
    equipmentsTotalPage: 1,
    showEquipment: null
   } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    var page = config.page 
    var keyword = config.keyword 

    if (page === undefined){
      page = 1  
    }

    if (keyword === undefined){
      keyword = ""
    }

    config = {
      pathname: "/client/equipments",
      data: {
        page: page,
        keyword: keyword
      },
      dataFunction: (data) => {
        var equipments = Equipment.rawDataToEquipments(data['equipments'])
        var equipmentsPage = data['pagination']['page']
        var equipmentsTotalPage = data['pagination']['total_page']
        
        this.setState({ equipments, equipmentsPage, equipmentsTotalPage })
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  getEquipment () {
    var serialNo = window.location.pathname.split('/')[2]

    var config = {
      pathname: "/client/equipments/" + serialNo,
      data: {},
      dataFunction: (data) => {
        var showEquipment = Equipment.rawDataToEquipment(data['equipment'])
        
        this.setState({ showEquipment })
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  componentDidMount(){
    if(window.location.pathname.split('/')[2] !== '' && window.location.pathname.split('/')[2] !== undefined){
      this.getEquipment()
    }else{
      this.getData();
    }
  }

  query = (config) => {
    config = {
      keyword: document.querySelector("input#search").value,
      page: 1,
      ...config,
    }
    console.log(config)
    this.getData(config)
  }

  equipmentTableRowClick = (equipment) => {
    window.location.href = `/equipments/${equipment.serialNo}`
  }

  render() { 
    var value = {
      ...this.state,
      equipmentTableRowClick: this.equipmentTableRowClick
    }

    return (
      <EquipmentsContext.Provider value={value}>
        {this.props.children}
      </EquipmentsContext.Provider>
    );
  }
}
 
export default EquipmentsContextProvider;