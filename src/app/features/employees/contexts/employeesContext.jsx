import React, { createContext, Component } from 'react';
import Employee from '../../../core/models/employee';
import { getFetch } from '../../../core/network/fetchData';

export const EmployeesContext = createContext();

class EmployeesContextProvider extends Component {
  state = { 
    employees: [],
    employeesPage: 1,
    employeesTotalPage: 1,
   } 

  getData (config) {
    if (config === undefined){
      config = {} 
    }

    var page = config.page === undefined ? 1 : config.page 
    var keyword = config.keyword === undefined ? "" : config.keyword

    config = {
      pathname: "/client/staffs",
      data: {
        page: page,
        keyword: keyword,
      },
      dataFunction: (data) => {
        var employees = Employee.rawDataToEmployees(data['staffs'])
        var employeesPage = data['pagination']['page']
        var employeesTotalPage = data['pagination']['total_page']
        
        this.setState({ employees, employeesPage, employeesTotalPage })
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
      <EmployeesContext.Provider value={value}>
        {this.props.children}
      </EmployeesContext.Provider>
    );
  }
}
 
export default EmployeesContextProvider;