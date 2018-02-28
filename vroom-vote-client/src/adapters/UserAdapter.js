const baseUrl = 'http://localhost:3000/api/v1'

class UserAdapter {

  static createUser(user) {
    return fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user)
    })
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

export default UserAdapter
