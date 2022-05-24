export default (data = [{id:'',front:'',side:'',nom:'',price:'',color:''}], action) => {
    switch (action.type) {
        case 'data':
            return action.payload;
        default:
            return data;
    }
}