export default (loading = {button:''}, action) => {
    switch (action.type) {
        case 'loading':
            return action.payload;
        default:
            return loading;
    }
}