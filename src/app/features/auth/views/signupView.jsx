import React from 'react';
import { Link } from 'react-router-dom';
import AuthContextProvider, { AuthContext } from '../contexts/authContext';
import '../stylesheets/signup.scss';

const SignUpView = () => {

  return (
    <AuthContextProvider>
      <div id="signup-page">
        <div className="custom-card signup-box d-flex">
          <div className="form-container">
            <h1>We are Excited for You to Join Us!</h1>
            <form action="#">
              <div className="d-flex">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" name="first_name" id="first_name" className='form-control' />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" name="last_name" id="last_name" className='form-control' />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile_no">Mobile No</label>
                <input type="text" name="mobile_no" id="mobile_no" className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" className='form-control' />
              </div>
              <div className="d-flex">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className='form-control' />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input type="email" name="email" id="email" className='form-control' />
                </div>
              </div>
            </form>
            <AuthContext.Consumer>{ context => {
              const { submitSignUp } = context 

              return (
                <button className="btn btn-dark" onClick={submitSignUp}>Sign Up</button>
              )
            }}</AuthContext.Consumer>
            <div className="redirect-to">
              Already have an account? 
              <Link to={"/sign_in"}>Sign In</Link> 
              now!
            </div>
          </div>
          <div className="news-container">

          </div>
        </div>
        <div className="custom-card hide">
          <div className="title">Sign In</div>
          <div className="form">
            <div className="group">
              <div className="label">Email</div>
              <input type="email" name="email" id="email" className='form-control' />
            </div>
            <div className="group">
              <div className="label">Password</div>
              <input type="password" name="password" id="password" className='form-control' />
            </div>

            <AuthContext.Consumer>{context => {
              const { submitSignIn } = context 

              return (
                <button className="btn btn-primary btn-sm" onClick={submitSignIn}>Sign In</button>
              )
            }}</AuthContext.Consumer>
          </div>
          <div className="sign-up-details">
            <span>Don't have an account yet?</span>
            <br />
            <Link to={"/sign_up"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </AuthContextProvider>
  )
}

export default SignUpView;