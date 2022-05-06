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
} from 'react-native';
import {CircleIcon, ScrollView} from 'native-base';
import {Modal, Portal, Button, Provider, DataTable} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';

import {
  en,
  // nl,
  // de,
  // pl,
  // pt,
  enGB,
  registerTranslation,
} from 'react-native-paper-dates'
registerTranslation('en', en)
// registerTranslation('nl', nl)
// registerTranslation('pl', pl)
// registerTranslation('pt', pt)
// registerTranslation('de', de)
registerTranslation('en-GB', enGB)

function Overtime() {
  const [visible, setVisible] = useState(false);
  const [keyboardShow, setKeyboardShow] = useState();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    params => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );
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
            {/* <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}> */}
            <View style={styles.container}>
              <View style={{flex: 0.5}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-ExtraBold',
                    color: 'black',
                  }}>
                  Overtime Form
                </Text>
              </View>
              <View style={{flex: 5}}>
                <TextInput
                  label="Date"
                  onChangeText={() => {}}
                  style={{backgroundColor: '#F1EEE9'}}
                  placeholder="Enter reason"
                />
                <Button
                  onPress={() => setOpen(true)}
                  uppercase={false}
                  mode="outlined">
                  Pick single date
                </Button>
                <DatePickerModal
                  locale="en"
                  mode="single"
                  visible={open}
                  onDismiss={onDismissSingle}
                  date={date}
                  onConfirm={onConfirmSingle}
                  // validRange={{
                  //   startDate: new Date(2021, 1, 2),  // optional
                  //   endDate: new Date(), // optional
                  //   disabledDates: [new Date()] // optional
                  // }}
                  // onChange={} // same props as onConfirm but triggered without confirmed by user
                  // saveLabel="Save" // optional
                  // uppercase={false} // optional, default is true
                  // label="Select date" // optional
                  // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                />
              </View>
              {!keyboardShow && (
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    flex: 0.5,
                  }}>
                  {/* fooot */}
                  <Button
                    style={{backgroundColor: '#E7264C', width: 115}}
                    onPress={hideModal}>
                    <Text style={{color: 'white'}}>Cancel</Text>
                  </Button>
                  <Button style={{backgroundColor: '#4A90C3', width: 115}}>
                    <Text style={{color: 'white'}}>Submit</Text>
                  </Button>
                </View>
              )}
            </View>
            {/* </KeyboardAvoidingView> */}
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
