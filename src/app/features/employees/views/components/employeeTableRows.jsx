import React from 'react';
import { useContext } from 'react';
import { EmployeesContext } from '../../contexts/employeesContext';

const EmployeeTableRows = () => {
  const context = useContext( EmployeesContext );
  const { employees } = context;

  if(employees.length > 0){
    return (
      <React.Fragment>
        {employees.map( employee => 
          <tr key={employee.id}>
            <td className='name'>{employee.name}</td>
            <td className='email'>{employee.email}</td>
            <td className="mobile-no">{employee.mobileNo}</td>
            <td className="address">{employee.address}</td>
          </tr>
        )}
      </React.Fragment>
    )
  }else{
    return (
      <tr className="empty-table">
        <td colSpan={4}>
          <img src={require("../../../../core/images/empty-table.png")} alt="" />
          <h3>No Data</h3>
        </td>
      </tr>
    )
  }
}

export default EmployeeTableRows;