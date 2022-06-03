export default (state = {addresses: [], address: [], message: ''}, action) => {
    switch (action.type) {
        case 'GET_USER_ADDRESSES':
            return {...state, addresses: action.payload};
        case 'GET_USER_ADDRESS':
            return {...state, address: action.payload};
        case 'UPDATE_USER_ADDRESS':
            return {...state, message: action.payload};
        default:
            return state;
    }
}