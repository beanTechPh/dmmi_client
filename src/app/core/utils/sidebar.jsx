import React, { Component } from 'react';
import '../stylesheets/sidebar.scss';

class SidebarComponent extends Component {
  state = {  } 
  render() { 
    return (
      <div id="sidebar">
        <div className="company-name">
          <img src={require("../images/company-icon.png")} alt="" />
          <div className="name">Double Dragon</div>
        </div>
        
        <div className="section">
          <div className="label">Company</div>
          <div className="menu">
            <ul>
              <li className='d-flex'>
                <img src={require("../images/sidebar/dashboard.png")} alt="" />
                Profile
              </li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <div className="label">Menu</div>
          <div className="menu">
            <ul>
              <li className='d-flex'>
                <img src={require("../images/sidebar/dashboard.png")} alt="" />
                Dashboard
              </li>
              <li className='d-flex active'>
                <img src={require("../images/sidebar/order.png")} alt="" />
                Orders
              </li>
              <li className='d-flex'>
                <img src={require("../images/sidebar/equipment.png")} alt="" />
                Equipment
              </li>
              <li className='d-flex'>
                <img src={require("../images/sidebar/inquiry.png")} alt="" />
                Inquiries
              </li>
              <li className='d-flex'>
                <img src={require("../images/sidebar/quotation.png")} alt="" />
                Quotations
              </li>
              <li className='d-flex'>
                <img src={require("../images/sidebar/personnel.png")} alt="" />
                Employees
              </li>
            </ul>
          </div>
        </div>

        <div id="logout">
          <button className="btn btn-primary btn-sm">Logout</button>
        </div>
      </div>
    );
  }
}
 
export default SidebarComponent;