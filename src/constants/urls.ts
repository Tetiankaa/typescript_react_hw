const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';
const users = '/users';
const auth ='/auth';

const urls = {
    cars,
    auth:{
        login:auth,
        register:users,
        myData:`${auth}/me`
    }
}

export {baseURL, urls}