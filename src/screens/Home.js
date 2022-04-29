import React from "react";
import {View,Text,StyleSheet} from "react-native";
import Request  from "../components/Request";
const Home=()=>{
    return(
        <View style={styles.homeStyle}>
           <Request title={"Attendance"}/>
           <Request title={"Leave Request"}/>
           <Request title={"Overtime"}/>
           <Request title={"Attendance"}/>
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