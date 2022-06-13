export default (state = {commandes: [], commande: []}, action) => {
    switch (action.type) {
        case 'GET_USER_COMMANDES':
            return {...state, commandes: action.payload};
        case 'GET_USER_COMMANDE':
            return {...state, commande: action.payload};
        default:
            return state;
    }
}