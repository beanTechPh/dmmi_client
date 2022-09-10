import React, { createContext, Component } from 'react';
import Equipment from '../../../core/models/equipment';
import { getFetch } from '../../../core/network/fetchData';

export const EquipmentsContext = createContext();

class EquipmentsContextProvider extends Component {
  state = { 
    equipments: [],
    equipmentsPage: 1,
    equipmentsTotalPage: 1,
    types: [],
    branches: [],
    showEquipment: null,
    productTypes: [],
    brands: []
   } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    var page = config.page === undefined ? 1 : config.page 
    var keyword = config.keyword === undefined ? "" : config.keyword
    var type_filter = config.type_filter === undefined ? "" : config.type_filter
    // var origin_filter = config.origin_filter === undefined ? "" : config.origin_filter
    var branch_filter = config.branch_filter === undefined ? "" : config.branch_filter
    var brand_filter = config.brand_filter === undefined ? "" : config.brand_filter

    config = {
      pathname: "/client/equipments",
      data: {
        page: page,
        keyword: keyword,
        type_filter: type_filter,
        // origin_filter: origin_filter,
        branch_filter: branch_filter
      },
      dataFunction: (data) => {
        var equipments = Equipment.rawDataToEquipments(data['equipments'])
        var equipmentsPage = data['pagination']['page']
        var equipmentsTotalPage = data['pagination']['total_page']
        var types = data['types']
        var branches = data['branches']
        
        this.setState({ equipments, equipmentsPage, equipmentsTotalPage, types, branches })
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  getEquipment () {
    var id = window.location.pathname.split('/')[2]

    var config = {
      pathname: "/client/equipments/" + id,
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
      type_filter: document.querySelector("select#type-filter").value,
      // origin_filter: document.querySelector("select#origin-filter").value,
      branch_filter: document.querySelector("select#branch-filter").value,
      branch_filter: document.querySelector("select#branch-filter").value,
      page: 1,
      ...config,
    }
    this.getData(config)
  }

  equipmentTableRowClick = (equipment) => {
    window.location.href = `/equipments/${equipment.id}`
  }

  render() { 
    var value = {
      ...this.state,
      query: this.query,
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