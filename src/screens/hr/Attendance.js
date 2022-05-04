import React ,{useState,useEffect} from "react";
import {Text,StyleSheet,View,TouchableOpacity,TextInput} from "react-native";
import { FormInput } from "../../components/common/FormHelper";
import {Colors} from "../../constant";
import { DataTable } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

function Attendance(){
  const attendance = useSelector((state) => state)
    const [reason,setReason]=useState("");
    console.log(attendance.attendnceReducer.attendance,"attendance");
    function onPressLogin(){

    }

    function getAttendnace(){
      // attendnceReducer
    }
    return(
        <>
        <View style={styles.container}>
    <View style={styles.header}>
    <View>
        <TextInput
        style={styles.TextInput}
        placeholder={`Enter reason`}
        placeholderTextColor="black"
        onChangeText={ setReason}

        />           
        <TouchableOpacity style={styles.btn} onPress={onPressLogin}>
           <Text style={styles.text}>Check In</Text>
        </TouchableOpacity>
    </View>
    </View>


    {/* <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title numeric>Check In</DataTable.Title>
        <DataTable.Title numeric>Check out</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>
      </DataTable> */}
    </View>

        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
 
    },
    header:{
        height:150,
        width:100,
    },
    inputView: {
      backgroundColor: Colors.INPUT_COLOR,
      borderRadius: 30,
      width: 200,
      height: 45,
      marginTop: 20,
      alignItems: "center",
    },
  
    TextInput: {
      textAlign:"center",
      backgroundColor:"gray",
      width:200,
      height:50,
      padding: 10,
      fontSize:16,
      flex:1,
      alignItems:"center",
      fontFamily: "Poppins-Black",
      justifyContent:"center"
    },
    text:{
     color:"white",
    },
  
    btn: {
      width: "100%",
      borderRadius: 25,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.BUTTON_COLOR,
      fontFamily: "Poppins-Bold"
    },
  });
export default Attendance;