import React from "react";
import {TextInput,Text,StyleSheet,View} from "react-native";

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
