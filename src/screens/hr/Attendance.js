import React ,{useState,useEffect} from "react";
import {Text,StyleSheet,View,TouchableOpacity,TextInput} from "react-native";
import { FormInput } from "../../components/common/FormHelper";
import {Colors} from "../../constant";
import { DataTable } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ResourceRoute from "../../services/Resource";
import {AttendanceAction} from '../../actions';
const attendanceResource=new ResourceRoute("hr/attendance");
function Attendance(){
  useEffect(()=>{
    getAttendnace();
  },[]);
  const attendance = useSelector((state) => state)
  const attendanceValue=attendance.attendnceReducer.attendance;
  // const defaultShift=attendance.attendnceReducer.defaultShift;
  console.log(attendance.attendnceReducer,attendance);
    const [reason,setReason]=useState("");
    const dispatch = useDispatch();
    function getAttendnace(){
      attendanceResource.getAttendance().then(response=>{
        if(response.data){
          dispatch(AttendanceAction.setAttendance(response.data));
        }
      }).catch(error=>{
        console.log(error);
      })
    }

    function onPressLogin(){
      // attendnceReducer
    }
    return(
        <>
        <View style={styles.container}>
    <View style={styles.header}>
    <View>
        {/* <TextInput
        style={styles.TextInput}
        placeholder={`Enter reason`}
        placeholderTextColor="black"
        onChangeText={ setReason}

        />            */}
        <TouchableOpacity style={styles.btn} onPress={onPressLogin}>
           <Text style={styles.text}>Check In</Text>
        </TouchableOpacity>
        {/* <Text style={defaultShift.name+"from"+defaultShift.from+"to"+defaultShift.to}>Check In</Text> */}
    </View>
    </View>


    <DataTable>
      <DataTable.Row>
      <DataTable.Cell style={{width:'20%'}}><Text style={{fontWeight: 'bold'}}>Date</Text></DataTable.Cell>
        <DataTable.Cell numeric style={{width:'50%'}}><Text style={{fontWeight: 'bold'}}>Check In</Text></DataTable.Cell>
        <DataTable.Cell numeric style={{width:'30%'}}><Text style={{fontWeight: 'bold'}}>Check Out</Text></DataTable.Cell>
      </DataTable.Row>
  
      
      {attendanceValue.map(atten=>{
        return(
          <DataTable.Row>
          <DataTable.Cell>{atten.date}</DataTable.Cell>
          <DataTable.Cell>
            <View>
            {
              atten.check_in_time.map(data=>{
                return   <Text  >
                  {data}
                  </Text>
               })}
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
          <View>
          <Text numberOfLines={2}>
               {
              atten.check_out_time.map(data=>{
                return data+'\n' })
               }
             </Text>
          </View>
          </DataTable.Cell>
         
        
    

          
      
    
          
          {/* {atten.check_out_time.map(data=>{
            return(
          <DataTable.Cell numeric>{data}</DataTable.Cell>
            )
          })} */}
        </DataTable.Row>
        )
      })}
      </DataTable>
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