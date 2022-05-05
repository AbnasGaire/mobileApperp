import React ,{useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import { CircleIcon, ScrollView  } from 'native-base';
import { Modal, Portal,Button, Provider,DataTable } from 'react-native-paper';


function Overtime(){
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        <>
        <ScrollView>
        <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>
      
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
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
    </DataTable>
    </ScrollView>
   
        <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
        <TextInput
      label="Date"
      onChangeText={text => setText(text)}

      
    />
    <View style={{}}>
    <View style={{height:150}}>
            <Text style={{fontSize:18,fontFamily:"Poppins-ExtraBold",color:"black"}}>Overtime Form</Text>
        </View>
        <View style={{height:300}}>
        
        </View>
    <View style={{display:"flex",
    justifyContent:"space-between",
    flexDirection:"row"
    
    }}>
        {/* fooot */}
    <Button style={{backgroundColor:"#E7264C",width:115}}> 
    <Text style={{color:"white"}}>Cancel</Text>
      </Button>
      <Button  style={{backgroundColor:"#4A90C3",width:115}}> 
      <Text style={{color:"white"}}>Submit</Text>
      </Button>
    </View>
    </View>

    
        </Modal>
      </Portal>
    </Provider>
    {!visible&&<TouchableOpacity onPress={showModal}>
    <View style={styles.addDiv}>
        <Text style={styles.plusIcon}>+</Text>
        </View>
    </TouchableOpacity>
    }
    
       
        </>
    )
}
const styles = StyleSheet.create({
    addDiv: {
      height:60,
      width:60,
      backgroundColor: "blue",
      alignItems: "center",
      color:"black",
      justifyContent:"center",
      borderRadius:50,
      position:"absolute",
      bottom:0,
      right:0,
      margin:10
 
    },
    plusIcon:{
        fontSize:30,
        color:"white"
    },
    containerStyle:{
     backgroundColor: 'white',
     padding:10,
     margin:10,
     flex:1,
    
    }
});
export default Overtime;