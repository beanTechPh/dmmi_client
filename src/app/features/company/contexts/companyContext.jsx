import React, { createContext, Component } from 'react';
import { postFetch } from '../../../core/network/fetchData';
import FlashManager from '../../../core/functions/flashManager';

export const CompanyContext = createContext();

class CompanyContextProvider extends Component {
  state = { 
  } 

  createCompany = () => {
    var isValid = true

    // text inputs
    var textInputs = ["#name", "#address", "#email"]
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

    // Validate logo
    var _validFileExtensions = [".jpg", ".jpeg", ".png"];
    var sFileName = document.querySelector("input#logo").value;
    if (sFileName.length > 0) {
        var blnValid = false;
        for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                blnValid = true;
                break;
            }
        }
        
        if (!blnValid) {
            FlashManager.setInstantFlashError("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "))
            return false;
        }
    }

    // get form data
    var data = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      logo: document.querySelector("input#logo").files[0]
    }

    var config = {
      pathname: "/client/companies",
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
    var value = {
      ...this.state,
      createCompany: this.createCompany
    }

    return (
      <CompanyContext.Provider value={value}>
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}
 
export default CompanyContextProvider;