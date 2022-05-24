let init = [{quickViewProduct:'',hideBody:'',cart:'',sideFilter:'',sideBar:'',sideAccount:'',login:'',register:'',loginContainer:'',registerContainer:'',carouselOverview:'',askQuestion:''}]
export default (display = init, action) => {
    switch (action.type) {
        case 'display':
            return action.payload;
        default:
            return display;
    }
}