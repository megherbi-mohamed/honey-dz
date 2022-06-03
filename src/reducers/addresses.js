export default (state = {addresses: [], address: []}, action) => {
    switch (action.type) {
        case 'GET_USER_ADDRESSES':
            return {...state, addresses: action.payload};
        case 'GET_USER_ADDRESS':
            return {...state, address: action.payload};
        default:
            return state;
    }
}