import React from "react";
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import {Avatar} from "native-base";
import {View,StyleSheet} from "react-native";
import {Text} from "native-base";
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../actions';

function Sidebar({...props}){
  const dispatch=useDispatch();
  const removeValue = async () => {
      try {
        await AsyncStorage.clear();
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
        <DrawerContentScrollView {...props}>
            <Header/>
            <DrawerItemList {...props} />
            <DrawerItem label="Sign Out" onPress={onPressLogout}/>
            {/* </Animated.View> */}
        </DrawerContentScrollView>
    )
}
export default Sidebar;

function Header(){
  const loginState = useSelector((state) => state)
    let userData=loginState.loginReducer.user;
    return(
        <View style={styles.mainDiv}>
      <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }} style={{marginTop:20}}>
        AJ
      </Avatar>
        <Text fontSize="md" bold>{userData.name}</Text>
        <Text fontSize="sm" style={{marginBottom:20}}>{userData.email}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
  mainDiv:{
      flex:1,
      flexDirection:"column",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#FFFFF2"
      
  },
  text:{
      marginTop:10,
      textAlign:"center",
      color:"black",
      fontSize:15,
      fontFamily:"bold"
  }
  });