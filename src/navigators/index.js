import React,{useRef,useEffect} from 'react';
import {AppState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginAction} from '../actions';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    SignIn,
    SplashScreen,
    Home
} from '../screens';
import { useDispatch,useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigation() {
//   return (
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         {/* <Drawer.Screen name="Notifications" component={Home} /> */}
//       </Drawer.Navigator>
//   );
// }
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
       {!isLogin? <Stack.Screen name="Signin" component={SignIn}  options={{headerShown: false}}/>:
        <>
          <Stack.Screen name="Home" component={Home} options={{headerTintColor: "blue"}}/>
          <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}} />

       </>
      

       }
      </Stack.Navigator> 

    </NavigationContainer>
  );
};

export default Navigators;
