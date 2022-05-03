import React,{useEffect} from "react";
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import {Avatar} from "react-native-paper";
import {Text,View,StyleSheet} from "react-native";
function Sidebar({...props}){
    return(
        <DrawerContentScrollView {...props}>
            <Header/>
            <DrawerItemList {...props} />
            <DrawerItem label="Sign Out" />
        </DrawerContentScrollView>
    )
}
export default Sidebar;

function Header(){
    useEffect(()=>{
        getData();
      },[]);
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@token')
          if(value !== null) {
              console.log(value,"alallalala");
          }
        } catch(e) {
          console.log(e)
        }
      }
    return(
        <View style={styles.mainDiv}>
        <Avatar.Icon size={60} icon="people"  style={{alignItems:"center",justifyContent:"center"}}/>
        <Text style={styles.text}>Header</Text>
        </View>

    )
}
const styles = StyleSheet.create({
  mainDiv:{
      flex:1,
      flexDirection:"column",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center"
      
  },
  text:{
      marginTop:10,
      textAlign:"center",
      color:"black",
      fontSize:15,
      fontFamily:"bold"
  }
  });