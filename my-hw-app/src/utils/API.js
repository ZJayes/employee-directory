import axios from 'axios'

const API = "https://randomuser.me/api/?results=20";
export default {
    search: function() {
        return axios.get(API)
    }
}