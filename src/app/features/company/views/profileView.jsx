import React, { Component } from 'react';
import CompanyContextProvider, { CompanyContext } from '../contexts/companyContext';
import '../stylesheets/profile.scss';

class CompanyProfileView extends Component {
  state = {  } 
  render() { 
    return (
      <CompanyContextProvider>
        <div id="company-profile-page" className='page-container'>
          <h1 className="title">Profile</h1>
          <CompanyContext.Consumer>{context => {
            const { company } = context

            if(company !== null){
              return (
                <React.Fragment>
                  <div className="custom-card details">
                    <div className="image">
                      <img src={company.logo} alt="" />
                    </div>
                    <div className="group d-flex">
                      <div className="label">Name:</div>
                      <div className="value">{company.name}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Email:</div>
                      <div className="value">{company.email}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Address:</div>
                      <div className="value">{company.address}</div>
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          }}</CompanyContext.Consumer>
        </div>
      </CompanyContextProvider>
    );
  }
}
 
export default CompanyProfileView;