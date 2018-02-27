export function signupUser(username, email, password, password_confirmation) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, email, password, password_confirmation} })
    })
    .then(res => res.json())
    .then(userData => dispatch(setCurrentUser(userData)))
  }
}

export function loginUser(email, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {email, password} })
    })
    .then(response => response.json())
    .then(userData => dispatch(setCurrentUser(userData)))
  }
}


export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}
