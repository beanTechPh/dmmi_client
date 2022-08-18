import React, { Component } from 'react';
import OrdersContextProvider from '../contexts/ordersContext';
import '../stylesheets/index.scss';
import NewOrderModal from './components/newOrderModal';
import OrderDetailsModal from './components/orderDetailsModal';
import OrderTableRows from './components/orderTableRows';

class OrdersIndexView extends Component {
  state = {  } 

  newOrderClick = (e) => {
    document.querySelector("#new-order-modal").classList.remove('hide')
  }

  render() { 
    return (
      <OrdersContextProvider>
        <div id="orders-page" className='page-container'>
          <h1 className="title">Orders</h1>
          <div className="custom-card filter-container">
            <div className="d-flex">
              <div className="search">
                <i className="bi bi-search"></i>
                <input type="text" name="search" className='form-control' placeholder='Search Order No...' autoComplete='off' />
              </div>
              <div className="actions d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" id='new-order' onClick={this.newOrderClick}>New Order</button>
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
              <OrderTableRows/>
            </tbody>
          </table>
          <NewOrderModal/>
          <OrderDetailsModal/>
        </div>
      </OrdersContextProvider>
    );
  }
}
 
export default OrdersIndexView;