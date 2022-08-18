import React, { createContext, Component } from 'react';
import Order from '../../../core/models/order';
import { postFetch, getFetch } from '../../../core/network/fetchData';

export const OrdersContext = createContext();

class OrdersContextProvider extends Component {
  state = { 
    orders: Order.sampleData(),
    ordersPage: 1,
    ordersTotalPage: 1,
    showOrder: null
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

  orderTableRowClick = (order) => {
    this.setState({ showOrder: order })
    
    // check if order details modal exist
    if(document.querySelector("#order-details-modal") !== null){
      document.querySelector("#order-details-modal").classList.remove('hide')
    }
  }

  render() { 
    var value = {
      ...this.state,
      orderTableRowClick: this.orderTableRowClick
    }

    return (
      <OrdersContext.Provider value={value}>
        {this.props.children}
      </OrdersContext.Provider>
    );
  }
}
 
export default OrdersContextProvider;