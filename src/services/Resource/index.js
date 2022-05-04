import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
const SERVER_DOMAIN = "http://192.168.1.11";

const apiVersion = "v1.0";

// axios.defaults.headers.common['Authorization'] = "Bearer 63|HCpZyqbVFteoPXIOTbvqVN8b8JcOKlZZKWzKiW08";
axios.defaults.headers.common = {'Authorization': `bearer 63|HCpZyqbVFteoPXIOTbvqVN8b8JcOKlZZKWzKiW08`}
const config = {
    headers: {
        "Content-type": "application/json",
         "Authorization": `Bearer 63|HCpZyqbVFteoPXIOTbvqVN8b8JcOKlZZKWzKiW08`,
    },
}; 
class ResourceRoute {
    constructor(resource) {
        this.resource = resource ? resource: "";
        this.baseUrl = SERVER_DOMAIN + `/api/${apiVersion}/`;
    }
    getSujan() {
        return axios.get(`${this.baseUrl}${this.resource}/sujan`);
     }
    login(data) {
        return axios.post(`${this.baseUrl}${this.resource}/login`,data);
     }
     getAttendance(){
         console.log(`${this.baseUrl}${this.resource}`);
         return axios.get(`${this.baseUrl}${this.resource}`,config);
     }
}
export default ResourceRoute;