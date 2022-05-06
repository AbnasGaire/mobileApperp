import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Dimensions,
} from 'react-native';
import {CircleIcon, ScrollView} from 'native-base';
import {
  Modal,
  Portal,
  Button,
  Provider,
  DataTable,
  TextInput as TI,
} from 'react-native-paper';
import {
  FormDateOrTime,
  FormInputWithBorder,
} from '../../components/common/FormHelper';
import {formatDate, getNumberOfHours} from '../../helper';

function Overtime() {
  const [visible, setVisible] = useState(false);
  const [keyboardShow, setKeyboardShow] = useState();
  const showModal = () => setVisible(true);

  const [dateValue, setDateValue] = useState(formatDate(new Date()));
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [numberofHours, setNumberofHours] = useState(null);
  const [reason, setReason] = useState('');
  const hideModal = () => {
    setReason('');
    setToTime('');
    setFromTime('');
    setVisible(false);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShow(false);
      },
    );
    console.log(keyboardShow, 'keyboardShow');
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    let a = getNumberOfHours(fromTime, toTime);
    setNumberofHours(a);
  }, [fromTime, toTime]);

  function modalBody() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 0.6}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-ExtraBold',
              color: 'black',
            }}>
            Overtime Form
          </Text>
        </View>
        <View style={{flex: 4.5}}>
          <FormDateOrTime
            title="Date"
            dateOrTime={dateValue}
            setDateOrTime={setDateValue}
            mode="date"
            style={{backgroundColor: '#F1EEE9', height: 50}}
          />
          <FormDateOrTime
            title="From Time"
            dateOrTime={fromTime}
            setDateOrTime={setFromTime}
            mode="time"
            style={{backgroundColor: '#F1EEE9', height: 50}}
          />
          <FormDateOrTime
            title="To Time"
            dateOrTime={toTime}
            setDateOrTime={setToTime}
            mode="time"
            style={{backgroundColor: '#F1EEE9', height: 50}}
          />
          {/* <FormInputWithBorder title="Number of Hours" handleChange={val => setNumberofHours(val)}style={{backgroundColor: '#F1EEE9', height: 50}} value={numberofHours} showKeyBoard={false}/> */}
          <FormInputWithBorder
            title="Reason"
            handleChange={val => setReason(val)}
            style={{backgroundColor: '#F1EEE9', height: 50}}
            value={reason}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 0.5,
            // position:"absolute",
            buttom: 0,
            left: 0,

            width: Dimensions.get('window').width - 50,
            alignItems: 'center',
          }}>
          <Button
            style={{backgroundColor: '#E7264C', width: 115}}
            onPress={hideModal}>
            <Text style={{color: 'white'}}>Cancel</Text>
          </Button>
          <Button style={{backgroundColor: '#4A90C3', width: 115}}>
            <Text style={{color: 'white'}}>Submit</Text>
          </Button>
        </View>
      </View>
    );
  }
  return (
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
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}>
            {keyboardShow ? (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                {modalBody()}
              </ScrollView>
            ) : (
              modalBody()
            )}
          </Modal>
        </Portal>
      </Provider>
      {!visible && (
        <TouchableOpacity onPress={showModal}>
          <View style={styles.addDiv}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  addDiv: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
  },
  plusIcon: {
    fontSize: 30,
    color: 'white',
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    flex: 1,
  },
});
export default Overtime;
