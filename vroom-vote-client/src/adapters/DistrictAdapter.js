const baseUrl = 'http://localhost:3000/api/v1'

class DistrictAdapter {

  static getDistrictDrivers() {
    return fetch(`${baseUrl}/drivers`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }

  static createRide(rider_id) {
    return fetch(`${baseUrl}/rides`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(rider_id)
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
