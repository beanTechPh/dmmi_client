import React, { createContext, Component } from 'react';
import Equipment from '../../../core/models/equipment';
import { getFetch } from '../../../core/network/fetchData';

export const DashboardContext = createContext();

class DashboardContextProvider extends Component {
  state = { 
   } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    config = {
      pathname: "/client/dashboard",
      data: {},
      dataFunction: (data) => {
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
      ...config,
    }
    this.getData(config)
  }

  render() { 
    var value = {
      ...this.state
    }

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
 
export default DashboardContextProvider;