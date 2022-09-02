import React, { Component } from 'react';
import EquipmentsContextProvider from '../contexts/equipmentsContext';
import '../stylesheets/index.scss';
import EquipmentTableRows from './components/equipmentTableRows';

class EquipmentsIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <EquipmentsContextProvider>
        <div id="equipments-page" className='page-container'>
          <h1 className="title">Equipment</h1>
          <div className="custom-card filter-container">
            <div className="d-flex">
              <div className="search">
                <i className="bi bi-search"></i>
                <input type="text" name="search" className='form-control' placeholder='Search Order No...' autoComplete='off' />
              </div>
              <div className="actions d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" id='scan-equipment' onClick={null}>Scan</button>
              </div>
            </div>

            <div className="filters d-flex">
              <div className="group d-flex">
                <div className="label">Type:</div>
                <select name="type" id="type-filter" className='form-select'>
                  <option value="">All Types</option>
                </select>
              </div>
              <div className="group d-flex">
                <div className="label">Origin:</div>
                <select name="origin" id="origin-filter" className='form-select'>
                  <option value="">All Origins</option>
                </select>
              </div>
              <div className="group d-flex">
                <div className="label">Branch:</div>
                <select name="branch" id="branch-filter" className='form-select'>
                  <option value="">All Branches</option>
                </select>
              </div>
            </div>
          </div>
          <table className="table data-table">
            <thead className="table-dark">
              <tr>
                <th className='name'>Name</th>
                <th className='type'>Type</th>
                <th className="serial-no">Serial No</th>
                <th className="branch">Branch</th>
                <th className='origin'>Origin</th>
              </tr>
            </thead>
            <tbody>
              <EquipmentTableRows/>
            </tbody>
          </table>
          {/* <NewOrderModal/>
          <OrderDetailsModal/> */}
        </div>
      </EquipmentsContextProvider>
    );
  }
}
 
export default EquipmentsIndexView;