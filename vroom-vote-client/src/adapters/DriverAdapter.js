const baseUrl = 'http://localhost:3000/api/v1'

class DriverAdapter {

  static getDistrictDrivers() {
    return fetch(`${baseUrl}/drivers`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export default DistrictAdapter
