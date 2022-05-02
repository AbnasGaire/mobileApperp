import axios from "axios";
const SERVER_DOMAIN = "http://192.168.1.6";

const apiVersion = "v1.0";

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
}
export default ResourceRoute;