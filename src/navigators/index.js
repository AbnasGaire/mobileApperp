import React,{useRef,useEffect} from 'react';
import {AppState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginAction} from '../actions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    SignIn,
    SplashScreen,
    Home,
    ForgetPassword
} from '../screens';
import Attendance from '../screens/hr/Attendance';
import LeaveRequest from '../screens/hr/LeaveRequest';
import Overtime from '../screens/hr/Overtime';
import { useDispatch,useSelector } from 'react-redux';
import Sidebar from './customDrawer';
import { IconButton, Colors } from 'react-native-paper';
// import {DrawerNavigation} from "./Drawer";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
      <Drawer.Navigator drawerContent={props=><Sidebar {...props} />} >
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon:({focused,color,size})=>(
            <IconButton
              icon="home"
              color={Colors.black}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          )
        }}/>
        <Drawer.Screen name="Attendance" component={Attendance}  options={{
          drawerIcon:({focused,color,size})=>(
            <IconButton
              icon="home"
              color={Colors.black}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          )
        }}/>
        <Drawer.Screen name="Leave Request" component={LeaveRequest} options={{
          drawerIcon:({focused,color,size})=>(
            <IconButton
              icon="home"
              color={Colors.black}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          )
        }}/>
        <Drawer.Screen name="Overtime" component={Overtime} options={{
          drawerIcon:({focused,color,size})=>(
            <IconButton
              icon="home"
              color={Colors.black}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          )
        }}/>
      </Drawer.Navigator>
  );
}
const Navigators = () => {
  const loginState = useSelector((state) => state);
  const appState = useRef(AppState.currentState);
  console.log(appState,"appState");
  const dispatch = useDispatch();
  useEffect(()=>{
    getData();
  },[]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
          console.log(value,"alallalala");
          dispatch(LoginAction.getToken({token:value,isLogin:true}));
      }
    } catch(e) {
      console.log(e)
    }
  }
  // getData();
 let isLogin=loginState.loginReducer.isLogin;
  return (
    <NavigationContainer>
     <Stack.Navigator>
       {!isLogin?
       <>
       <Stack.Screen name="Signin" component={SignIn}  options={{headerShown: false}}/>
       {/* <Stack.Screen name="Forget Password" component={ForgetPassword} /> */}
       </> :
        <>
          <Stack.Screen name="Home" component={DrawerNavigation} options={{headerTintColor: "blue",headerShown: false}}/>
          <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}} />
       </>
      

       }
      </Stack.Navigator> 

    </NavigationContainer>
  );
};

export default Navigators;
