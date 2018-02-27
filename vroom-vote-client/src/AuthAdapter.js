const baseUrl = 'http://localhost:3001/api/v1'

export default class AuthAdapter {
  
  static signUp(signUpParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({user: signUpParams})
    }).then(res => res.json())
  }
  
  static login (loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }
  
  static currentUser() {
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json())
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

function signUpHeaders () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}