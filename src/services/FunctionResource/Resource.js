import  React from "react"
import { useSelector} from 'react-redux';
import axios from "axios";
function Resource(resources){
const SERVER_DOMAIN = "http://192.168.1.11";
const resource = resources ? resources: "";
const baseUrl = SERVER_DOMAIN + `/api/${apiVersion}/`;
const apiVersion = "v1.0";
    const login = useSelector((state) => state)
    console.log(login.loginReducer.token);
    const config = {
        headers: {
            "Content-type": "application/json",
            "Accept":"application/json",
            "Authorization": "Bearer"+login.loginReducer.token,
        },
    };
    return ({
        index(){

        },
        getAttendance(){
            return axios.get(`${baseUrl}${resource}`,config);
        }
    })

}
export default Resource;
