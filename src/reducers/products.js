export default (products = [], action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return action.payload;
        case 'GET_CATEGORY_PRODUCTS':
            return action.payload;
        case 'GET_PRODUCT':
            return action.payload;
        default:
            return products;
    }
}