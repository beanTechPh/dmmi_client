import React, { createContext, Component } from 'react';
import Equipment from '../../../core/models/equipment';
import { getFetch } from '../../../core/network/fetchData';

export const EquipmentsContext = createContext();

class EquipmentsContextProvider extends Component {
  state = { 
    equipments: Equipment.sampleData(),
    equipmentsPage: 1,
    equipmentsTotalPage: 1,
    showEquipment: Equipment.sampleData()[0]
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
      pathname: "/inventory/products",
      data: {
        company_name: window.location.pathname.split('/')[1],
        page: page,
        keyword: keyword
      },
      dataFunction: (data) => {
        // var products = Product.rawDataToProducts(data['products'])
        // var productsPage = data['pagination']['page']
        // var productsTotalPage = data['pagination']['total_page']
        
        
        // this.setState({ products, productsPage, productsTotalPage })
        // console.log("STATE:", this.state)
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  componentDidMount(){
    // this.getData();
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
    this.setState({ showEquipment: equipment })
    
    // check if order details modal exist
    if(document.querySelector("#order-details-modal") !== null){
      document.querySelector("#order-details-modal").classList.remove('hide')
    }
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