const baseUrl = 'http://localhost:3000/api/v1'

class DistrictAdapter {

  static getDistrictDrivers() {
    return fetch(`${baseUrl}/drivers`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }

  static getMyCarpool() {
    return fetch(`${baseUrl}/driver`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }

  static joinCarpool(driver_id) {
    return fetch(`${baseUrl}/ride`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(driver_id)
    })
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export default DistrictAdapter
