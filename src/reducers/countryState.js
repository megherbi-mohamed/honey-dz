export default (state = {countries: [], states: []}, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {...state, countries: action.payload};
        case 'GET_STATES':
            return {...state, states: action.payload};
        default:
            return state;
    }
}