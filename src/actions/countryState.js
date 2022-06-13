import { Country, State }  from 'country-state-city';

export const getAllCountries = () => (dispatch) => {
    const countries = Country.getAllCountries();
    dispatch({type: 'GET_COUNTRIES', payload: countries})
}

export const getStates = (country) => (dispatch) => {
    const states = State.getStatesOfCountry(country);
    dispatch({type: 'GET_STATES', payload: states})
}