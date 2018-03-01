const baseUrl = 'http://localhost:3001'

class DistrictAdapter {

  static getDistrictDrivers() {
    return fetch(`${baseUrl}/drivers`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }

}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

export default DistrictAdapter
