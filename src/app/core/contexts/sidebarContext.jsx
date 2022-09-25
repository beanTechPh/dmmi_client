import React, { createContext, Component } from 'react';
import Company from '../models/company';
import { getFetch, deleteFetch } from '../network/fetchData';

export const SidebarContext = createContext();

class SidebarContextProvider extends Component {
  state = { 
    company: null
  } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    config = {
      pathname: "/client/dashboard/sidebar",
      data: {},
      dataFunction: (data) => {
        var company = Company.rawDataToCompany(data['company'])

        this.setState({ company })
      },
      errorFunction: (error) => {
      }
    }

    getFetch(config)
  }

  componentDidMount(){
    this.getData();
  }

  logout = (e) => {
    const config = {
      pathname: "/client/staff_auth/sign_out",
      data: {},
      dataFunction: (data) => {
        window.location.href = `/sign_in`
      }
    }

    deleteFetch(config)
  }

  render() { 
    const value = {
      ...this.state,
      logout: this.logout
    }

    return (
      <SidebarContext.Provider value={value}>
        {this.props.children}
      </SidebarContext.Provider>
    );
  }
}
 
export default SidebarContextProvider;