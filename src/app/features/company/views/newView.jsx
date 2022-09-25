import React from 'react';
import FlashComponent from '../../../core/utils/flash';
import CompanyContextProvider, { CompanyContext } from '../contexts/companyContext';
import '../stylesheets/new.scss';

const CompanyNewView = () => {

  return (
    <CompanyContextProvider>
      <div id="company-new-page">
        <FlashComponent/>
        <div className="custom-card company-new-box d-flex">
          <div className="form-container">
            <h1>Company Details</h1>
            <form action="#">
              <div className="form-group">
                <label htmlFor="name">Company Name</label>
                <input type="text" name="name" id="name" className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="address">Company Address</label>
                <input type="text" name="address" id="address" className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="email">Company Email</label>
                <input type="text" name="email" id="email" className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="logo">Company Logo</label>
                <input type="file" name="logo" id='logo' className='form-control' />
              </div>
            </form>
            <CompanyContext.Consumer>{context => {
              const { createCompany } = context 

              return (
                <button className="btn btn-dark" onClick={createCompany}>Create</button>
              )
            }}</CompanyContext.Consumer>
          </div>
          <div className="news-container">

          </div>
        </div>
      </div>
    </CompanyContextProvider>
  )
}

export default CompanyNewView;