import React from "react";
import {TextInput,Text,StyleSheet,View,TouchableOpacity} from "react-native";

export function FormInput(props){
    return(
        <>
        <View>
                <TextInput
                style={props.style}
                placeholder={`Enter ${props.placeholder}`}
                placeholderTextColor={props.placeHolderColor&&props.placeHolderColor}
                onChangeText={ props.handleChange}
                secureTextEntry={props.secureTextEntry??false}

                />
        
        </View>
        <Text style={styles.errorMessage}>
        {props.errors?props.errors:null}
        </Text>
    </>

    )
}


export function DefaultButton(props){
    return(
        <>
        <TouchableOpacity style={props.style}>
         <Text style={styles.loginText}>{props.title}</Text>
        </TouchableOpacity> 
        </>
    )
}


const styles = StyleSheet.create({
    errorMessage: {
      color:"red",
      fontSize:15
    },
    // viewCenter: {
    //     alignItems:"center",
    //     justifyContent:"center"
    //   }
});
