import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/new.scss';

const CompanyNewView = () => {

  return (
    // <AuthContextProvider>
      <div id="company-new-page">
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
            <button className="btn btn-dark">Create</button>
          </div>
          <div className="news-container">

          </div>
        </div>
      </div>
    // </AuthContextProvider>
  )
}

export default CompanyNewView;