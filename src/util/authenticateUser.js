const isUserLoggedIn = () => {
    const token = window.localStorage.getItem("jwtToken");
    if(token){
        return true;
    }
    return false;
    };
    
export default isUserLoggedIn;