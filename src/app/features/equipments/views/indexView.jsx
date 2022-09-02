import React, { Component } from 'react';
import EquipmentsContextProvider, { EquipmentsContext } from '../contexts/equipmentsContext';
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
                <EquipmentsContext.Consumer>{ context => {
                  const { query } = context

                  return (
                    <input type="text" name="search" id='search' className='form-control' placeholder='Search Order No...' autoComplete='off' onKeyUp={e => query()} />
                  )
                }}</EquipmentsContext.Consumer>
              </div>
              <div className="actions d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" id='scan-equipment' onClick={null}>Scan</button>
              </div>
            </div>

            <div className="filters d-flex">
              <EquipmentsContext.Consumer>{ context => {
                const { types, branches, query } = context

                return (
                  <React.Fragment>
                    <div className="group d-flex">
                      <div className="label">Type:</div>
                      <select name="type" id="type-filter" className='form-select' onChange={e => query()}>
                        <option value="">All Types</option>
                        {types.map( type => 
                          <option key={type.name} value={type.name}>{type.name}</option>
                        )}
                      </select>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Origin:</div>
                      <select name="origin" id="origin-filter" className='form-select' onChange={e => query()}>
                        <option value="">All Origins</option>
                        <option value="order">Order</option>
                        <option value="scan">Scan</option>
                      </select>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Branch:</div>
                      <select name="branch" id="branch-filter" className='form-select' onChange={e => query()}>
                        <option value="">All Branches</option>
                        {branches.map( branch => 
                          <option key={branch.name} value={branch.name}>{branch.name}</option>
                        )}
                      </select>
                    </div>
                  </React.Fragment>
                )
              }}</EquipmentsContext.Consumer>
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