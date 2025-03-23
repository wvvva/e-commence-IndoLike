import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users"

class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    addUser(username, password){
        const params = new URLSearchParams();
        params.append("username", username);
        params.append("password", password);

        return axios.post(USER_API_BASE_URL + "/add", params);
    }

    verifyUser(username, password){
        const params = new URLSearchParams();
        params.append("username", username);
        params.append("password", password);

        return axios.post(USER_API_BASE_URL + "/verify", params);
    }

    deleteUser(userid){
        const params = new URLSearchParams();
        params.append("userid", userid);

        return axios.post(USER_API_BASE_URL + "/delete", params);
    }

    addItem(itemId){
        const params = new URLSearchParams();
        console.log(sessionStorage.getItem("userId"))
        params.append("userId", parseFloat(sessionStorage.getItem("userId")));
        params.append("itemId", parseFloat(itemId));

        return axios.post(USER_API_BASE_URL + "/addItem", params);
    }

    removeItem(itemId){
        const params = new URLSearchParams();
        console.log(sessionStorage.getItem("userId"))
        params.append("userId", parseFloat(sessionStorage.getItem("userId")));
        params.append("itemId", parseFloat(itemId));

        return axios.post(USER_API_BASE_URL + "/removeItem", params);
    }

    getItems(){
        const params = new URLSearchParams();
        console.log(sessionStorage.getItem("userId"))
        params.append("userId", parseFloat(sessionStorage.getItem("userId")));

        return axios.post(USER_API_BASE_URL + "/getItems", params);
    }

    checkout() {
        const params = new URLSearchParams();
        params.append("userId", parseFloat(sessionStorage.getItem("userId")));
        return axios.post('http://localhost:8080/api/checkout', params);
    }
}

export default new UserService()