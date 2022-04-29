import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import {useDispatch, useSelector} from 'react-redux';
// import {LoginAction} from '../actions'; 
// import LoginResource from "../services/Login/LoginResource";
import ResourceRoute from "../services/Resource";
const loginData=new ResourceRoute("auth");
export default function SignIn({navigation}) {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPressLogin = async () =>{
    //navigation.push("Signin");
    navigation.navigate('DrawerNavigation')
    // try{
    //   console.log(loginData.getSujan(),axios.get('http://192.168.123.14/api/v1.0/auth/asd'));
    //   loginData.getSujan().then(response=>{
    //     console.log(response.data);
    //   }).catch(error=>{
    //     console.log(error);
    //   })

    //   loginData.login({email:"sudeep.byanju@whetstoneassociates.net",password:"kGe$v7d_RmWFLk+5"}).then(response=>{
    //     console.log(response);
    //   }).catch(error=>{
    //     console.error(error);
    //   });
    // }catch(error){
    //   console.log(error)
    // }  
  };
  
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/logo.jpg")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) =>{
              setEmail(email)
          }  
        }
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => {
          setPassword(password)
        }}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>{
        dispatch(LoginAction.GET)
      }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.extraDiv}>

      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop:10,
    marginBottom: 40,
    width: 80,
    height:80,
  },
 
  inputView: {
    backgroundColor: "#B8B8B8",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent:"center"
  },
 
  TextInput: {
    textAlign:"center",
    display:'flex',
    height: 50,
    flex: 1,
    padding: 10,
    fontSize:18,
    justifyContent:"center"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginText:{
   color:"white",
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#746AB0",
  },
  extraDiv:{
      marginBottom:50,
  }
});
