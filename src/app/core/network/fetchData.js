import SessionsManager from "./sessionsManager";
import { ApiUrl } from "./url";

export const postFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')
  fetch((ApiUrl + pathName),
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...SessionsManager.getHeaders()
    },
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        SessionsManager.setHeaders(response)

        return response.json();
      }else if (response.status === 401) {
        SessionsManager.destroyHeaders()
        return window.location.href = `/sign_in`
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    })
    .catch(error => {
      console.log(error)
      document.querySelector("#loading-page").classList.add('hide')
      errorFunction(error)
    });
}

export const putFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')
  fetch((ApiUrl + pathName),
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...SessionsManager.getHeaders()
    },
    method: "PUT",
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        SessionsManager.setHeaders(response)

        return response.json();
      }else if (response.status === 401) {
        SessionsManager.destroyHeaders()
        return window.location.href = `/sign_in`
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    })
    .catch(error => {
      console.log(error)
      document.querySelector("#loading-page").classList.add('hide')
      errorFunction(error)
    });
}

export const deleteFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  document.querySelector("#loading-page").classList.remove('hide')
  fetch((ApiUrl + pathName),
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...SessionsManager.getHeaders()
    },
    method: "DELETE",
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        SessionsManager.setHeaders(response)

        return response.json();
      }else if (response.status === 401) {
        SessionsManager.destroyHeaders()
        return window.location.href = `/sign_in`
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    })
    .catch(error => {
      console.log(error)
      document.querySelector("#loading-page").classList.add('hide')
      errorFunction(error)
    });
}

export const getFetch = (config) => {
  var pathName = config.pathname
  var data = config.data
  var dataFunction = config.dataFunction
  var errorFunction = config.errorFunction

  if(dataFunction === undefined) {
    dataFunction = () => {}
  }

  if(errorFunction === undefined) {
    errorFunction = () => {}
  }

  if(data === undefined) {
    data = {}
  }

  // data to string
  data = Object.keys(data).map( (key,_) => {
    return `${key}=${data[key]}`
  }).join("&")

  document.querySelector("#loading-page").classList.remove('hide')
  fetch((ApiUrl + pathName + "?" + data),{
    headers: SessionsManager.getHeaders()
  }).then(response => {
      if (response.ok) {
        SessionsManager.setHeaders(response)

        return response.json();
      }else if (response.status === 401) {
        console.log("headers", SessionsManager.getHeaders())
        SessionsManager.destroyHeaders()
        console.log(response)
        console.log("headers", SessionsManager.getHeaders())
        alert("Asd")
        return window.location.href = `/sign_in`
      }
      throw new Error('Something went wrong');
    })
    .then(data => {
      if(data.constructor === Object){
        document.querySelector("#loading-page").classList.add('hide')
        dataFunction(data)
      }
    })
    .catch(error => {
      document.querySelector("#loading-page").classList.add('hide')
      console.log("Error:", error)
      errorFunction(error)
    });
}