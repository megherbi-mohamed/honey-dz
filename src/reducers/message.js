export default (state = { message: '', loading : false }, action) => {
    switch (action.type) {
        case 'loading':
            return { ...state, message: action.payload.message, loading: action.payload.loading };
        default:
            return state;
    }
}