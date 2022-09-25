import React, { Component } from 'react';
import DashboardContextProvider from '../contexts/dashboardContext';

class DashboardIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <DashboardContextProvider>
      <div id="dashboard-page" className='page-container'>
        <h1 className="title">Dashboard</h1>
      </div>
      </DashboardContextProvider>
    );
  }
}
 
export default DashboardIndexView;