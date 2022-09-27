import React, { createContext, Component } from 'react';
import Inquiry from '../../../core/models/inquiry';
import { getFetch } from '../../../core/network/fetchData';

export const InquiriesContext = createContext();

class InquiriesContextProvider extends Component {
  state = { 
    inquiries: [],
    inquiriesPage: 1,
    inquiriesTotalPage: 1,
   } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    var page = config.page === undefined ? 1 : config.page 
    var keyword = config.keyword === undefined ? "" : config.keyword

    config = {
      pathname: "/client/inquiries",
      data: {
        page: page,
        keyword: keyword,
      },
      dataFunction: (data) => {
        var inquiries = Inquiry.rawDataToInquiries(data['inquiries'])
        var inquiriesPage = data['pagination']['page']
        var inquiriesTotalPage = data['pagination']['total_page']
        
        this.setState({ inquiries, inquiriesPage, inquiriesTotalPage })
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  componentDidMount(){
    this.getData();
  }

  query = (config) => {
    config = {
      keyword: document.querySelector("input#search").value,
      page: 1,
      ...config,
    }
    this.getData(config)
  }

  render() { 
    var value = {
      ...this.state,
      query: this.query,
    }

    return (
      <InquiriesContext.Provider value={value}>
        {this.props.children}
      </InquiriesContext.Provider>
    );
  }
}
 
export default InquiriesContextProvider;