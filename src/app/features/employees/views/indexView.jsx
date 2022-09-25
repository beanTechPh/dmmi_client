import React, { Component } from 'react';
import Pagination from '../../../core/utils/pagination';
import EmployeesContextProvider, { EmployeesContext } from '../contexts/employeesContext';
import '../stylesheets/index.scss';
import EmployeeTableRows from './components/employeeTableRows';

class EquipmentsIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <EmployeesContextProvider>
        <div id="employees-page" className='page-container'>
          <h1 className="title">Employees</h1>
          <div className="custom-card filter-container">
            <div className="d-flex">
              <div className="search">
                <i className="bi bi-search"></i>
                <EmployeesContext.Consumer>{ context => {
                  const { query } = context

                  return (
                    <input type="text" name="search" id='search' className='form-control' placeholder='Search Employee...' autoComplete='off' onKeyUp={e => query()} />
                  )
                }}</EmployeesContext.Consumer>
              </div>
              <div className="actions d-flex justify-content-end">
                <button className="btn btn-sm btn-primary">Add</button>
              </div>
            </div>
          </div>
          <table className="table data-table">
            <thead className="table-dark">
              <tr>
                <th className='name'>Name</th>
                <th className="email">Email</th>
                <th className='mobile-no'>Mobile No</th>
                <th className="address">Address</th>
              </tr>
            </thead>
            <tbody>
              <EmployeeTableRows/>
            </tbody>
          </table>
          <EmployeesContext.Consumer>{context => {
            const { employeesPage, employeesTotalPage, query } = context 

            return(
              <Pagination page={employeesPage} totalPage={employeesTotalPage} query={query} />
            )
          }}</EmployeesContext.Consumer>
        </div>
      </EmployeesContextProvider>
    );
  }
}
 
export default EquipmentsIndexView;