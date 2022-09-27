import React, { createContext, Component } from 'react';
import { textValidation } from '../../../core/functions/validation';
import Inquiry from '../../../core/models/inquiry';
import { getFetch, postFetch } from '../../../core/network/fetchData';

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

  submitInquiry = (e) => {
    e.preventDefault()
    var isValid = true
    var modal = document.querySelector("#equipment-create-modal")

    // text inputs
    var textInputs = ["input[name='subject']", "textarea[name='body']"]
    isValid = textValidation(textInputs)

    if(!isValid){
      return false
    }

    // get form data
    var data = {
      body: document.querySelector("textarea[name='body']").value,
      subject: document.querySelector("input[name='subject']").value,
    }
    
    var config = {
      pathname: "/client/inquiries",
      data: data,
      dataFunction: (data) => {
        this.query()
        modal.querySelector(".content").classList.add('hide')
        modal.querySelector(".error-content").classList.add('hide')
        modal.querySelector(".success-content").classList.remove('hide')
      },
      errorFunction: (error) => {
        modal.querySelector(".content").classList.add('hide')
        modal.querySelector(".error-content").classList.remove('hide')
        modal.querySelector(".success-content").classList.add('hide')
      }
    }
    postFetch(config)
  }

  render() { 
    var value = {
      ...this.state,
      query: this.query,
      submitInquiry: this.submitInquiry
    }

    return (
      <InquiriesContext.Provider value={value}>
        {this.props.children}
      </InquiriesContext.Provider>
    );
  }
}
 
export default InquiriesContextProvider;