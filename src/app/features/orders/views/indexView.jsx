import React, { Component } from 'react';
import '../stylesheets/index.scss';

class OrdersIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="orders-page" className='page-container'>
        <h1 className="title">Orders</h1>
        <div className="custom-card filter-container">
          <div className="d-flex">
            <div className="search">
              <i className="bi bi-search"></i>
              <input type="text" name="search" className='form-control' placeholder='Search Order No...' autoComplete='off' />
            </div>
            <div className="actions d-flex justify-content-end">
              <button className="btn btn-primary btn-sm" id='new-order'>New Order</button>
            </div>
          </div>

          <div className="filters d-flex">
            <div className="group d-flex">
              <div className="label">Date:</div>
              <select name="date" id="date-filter" className='form-select'>
                <option value="">All Dates</option>
              </select>
            </div>
            <div className="group d-flex">
              <div className="label">Status:</div>
              <select name="status" id="status-filter" className='form-select'>
                <option value="">All Status</option>
              </select>
            </div>
          </div>
        </div>
        <table className="table data-table">
          <thead className="table-dark">
            <tr>
              <th className='date'>Date</th>
              <th className='id-no'>Order No.</th>
              <th className="price">Price</th>
              <th className='status'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="date">Jan 1, 2022</td>
              <td className="id-no">O-00001</td>
              <td className="price">Calculating</td>
              <td className="status">
                <div className="on-process">On Process</div>
              </td>
            </tr>
            <tr>
              <td className="date">Jan 2, 2022</td>
              <td className="id-no">O-00002</td>
              <td className="price">₱100,000</td>
              <td className="status">
                <div className="on-progress">On Progress</div>
              </td>
            </tr>
            <tr>
              <td className="date">Jan 3, 2022</td>
              <td className="id-no">O-00003</td>
              <td className="price">₱100,000</td>
              <td className="status">
                <div className="mobilized">Mobilized</div>
              </td>
            </tr>
            <tr>
              <td className="date">Jan 4, 2022</td>
              <td className="id-no">O-00004</td>
              <td className="price">₱100,000</td>
              <td className="status">
                <div className="delivered">Delivered</div>
              </td>
            </tr>
            <tr>
              <td className="date">Jan 5, 2022</td>
              <td className="id-no">O-00005</td>
              <td className="price">₱100,000</td>
              <td className="status">
                <div className="canceled">Canceled</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default OrdersIndexView;