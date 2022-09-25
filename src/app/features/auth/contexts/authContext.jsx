import React, { createContext, Component } from 'react';
import { postFetch } from '../../../core/network/fetchData';
import SessionsManager from '../../../core/network/sessionsManager';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
    
  } 

  constructor() {
    super()
    // var headers = SessionsManager.getHeaders()
    // if (headers['access-token'] !== "" || headers['client'] !== "" || headers['uid'] !== ""){
    //   window.location.href = `/`
    // }
  }

  componentDidMount(){
    
  }

  submitSignUp = () => {
    var isValid = true

    // text inputs
    var textInputs = ["#first_name", "#last_name", "#email", "#password", "#mobile_no", "#address"]
    for (let i = 0; i < textInputs.length; i++) {
      const id = textInputs[i];
      
      if(document.querySelector(id).value === ""){
        document.querySelector(id).classList.add('empty')
        isValid = false
        break
      }else if(document.querySelector(id).name === "email") {
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
      
        if(validateEmail(document.querySelector(id).value) === null){
          document.querySelector(id).classList.add('empty')
          isValid = false
          break
        }else{
          document.querySelector(id).classList.remove('empty')
        }
      }else{
        document.querySelector(id).classList.remove('empty')
      }
    }

    if(!isValid){
      return false
    }

    // get form data
    var data = {
      first_name: document.querySelector("#first_name").value,
      last_name: document.querySelector("#last_name").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      mobile_no: document.querySelector("#mobile_no").value,
      address: document.querySelector("#address").value,
    }

    var config = {
      pathname: "/client/staff_auth",
      data: data,
      dataFunction: (data) => {
        window.location.href = `/company/new`
      },
      errorFunction: (error) => {
      }
    }
    postFetch(config)
  }

  submitSignIn = () => {
    var isValid = true

    // text inputs
    var textInputs = ["#email", "#password"]
    for (let i = 0; i < textInputs.length; i++) {
      const id = textInputs[i];
      
      if(document.querySelector(id).value === ""){
        document.querySelector(id).classList.add('empty')
        isValid = false
        break
      }else if(document.querySelector(id).name === "email") {
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
      
        if(validateEmail(document.querySelector(id).value) === null){
          document.querySelector(id).classList.add('empty')
          isValid = false
          break
        }else{
          document.querySelector(id).classList.remove('empty')
        }
      }else{
        document.querySelector(id).classList.remove('empty')
      }
    }

    if(!isValid){
      return false
    }

    // get form data
    var data = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    }

    var config = {
      pathname: "/client/staff_auth/sign_in",
      data: data,
      dataFunction: (data) => {
        window.location.href = `/`
      },
      errorFunction: (error) => {
      }
    }
    postFetch(config)
  }

  render() { 
    const value = {
      ...this.state,
      submitSignUp: this.submitSignUp,
      submitSignIn: this.submitSignIn
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
 
export default AuthContextProvider;