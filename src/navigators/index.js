import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    SignIn,
    SplashScreen,
    Home
} from '../screens';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Notifications" component={Home} /> */}
      </Drawer.Navigator>
  );
}
const Navigators = () => {

  return (
    <NavigationContainer>
     {/* <Stack.Navigator >
            <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}} />
            <Stack.Screen name="Signin" component={SignIn}  options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerTintColor: "blue"}}/>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerTintColor: "blue"}}/>
      </Stack.Navigator>  */}
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignIn" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
