import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/items"

class ItemService{
    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }

    // addUser(username, password){
    //     const params = new URLSearchParams();
    //     params.append("username", username);
    //     params.append("password", password);

    //     return axios.post(USER_API_BASE_URL + "/add", params);
    // }

    // deleteUser(userid){
    //     const params = new URLSearchParams();
    //     params.append("userid", userid);

    //     return axios.post(USER_API_BASE_URL + "/delete", params);
    // }
}

export default new ItemService()