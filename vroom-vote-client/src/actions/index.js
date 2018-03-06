export function logIn(user) {
  console.log(user);
  return { type: 'LOG_IN', ...user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getDistrictDrivers(drivers) {
  return { type: 'GET_DISTRICT_DRIVERS', drivers: drivers }
}

export function getRiderCarpool(riderCarpool) {
  return { type: 'GET_RIDER_CARPOOL', riderCarpool: riderCarpool }
}

export function getDriverCarpool(driverCarpool) {
  return { type: 'GET_DRIVER_CARPOOL', driverCarpool: driverCarpool }
}

export function hasErrored(bool) {
    return { type: 'HAS_ERRORED', hasErrored: bool };
}
export function isLoading(bool) {
    return { type: 'IS_LOADING', isLoading: bool };
}
export function userFetchDataSuccess(user) {
    return { type: 'USER_FETCH_DATA_SUCCESS', user: user };
}

export function userFetchData(url) {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => dispatch(userFetchDataSuccess(user)))
            .catch(() => dispatch(hasErrored(true)));
    };
}
