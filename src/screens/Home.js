import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,TouchableOpacity,AsyncStorageStatic} from "react-native";
import Request  from "../components/Request";
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getData} from "../components/common/AsyncKey";
const Home=({navigation})=>{
    const loginState = useSelector((state) => state)
    const dispatch=useDispatch();
    const removeValue = async () => {
        try {
          await AsyncStorage.removeItem('@token');
        } catch(e) {
          console.log(e);
        }
      
        console.log('Done.')
      }
    function onPressLogout(){
        removeValue();
        dispatch(LoginAction.logout());
    
    }
    return(
        <View style={styles.homeStyle}>
           <Request title={"Attendance"}/>
           <Request title={"Leave Request"}/>
           <Request title={"Overtime"}/>
           <Request title={"Attendance"}/>
           <TouchableOpacity onPress={onPressLogout}>
             <Text >Logout</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    homeStyle: {
        display:"flex",
        justifyContent:'space-between',
    }
  });

export default Home;
