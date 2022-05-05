import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

const SERVER_DOMAIN = "http://192.168.1.11";

const apiVersion = "v1.0";

class ResourceRoute {
    
    constructor(resource,config) {
        // abc();
        this.resource = resource ? resource: "";
        this.baseUrl = SERVER_DOMAIN + `/api/${apiVersion}/`;
        this.config = config;
    }

    login(data) {
        return axios.post(`${this.baseUrl}${this.resource}/login`,data);
     }
     getAttendance(){
         console.log(this.config,"------------------------------------");
         return axios.get(`${this.baseUrl}${this.resource}`,this.config);
     }
     setAttendance(data){
         console.log(data,this.baseUrl+this.resource);
         return axios.post(`${this.baseUrl}${this.resource}`,data,this.config);
     }
}
export default ResourceRoute;