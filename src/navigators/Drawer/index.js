import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../screens/Home";
import SignIn from "../../screens/SigninScreen";
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Notifications" component={Home} /> */}
      </Drawer.Navigator>
  );
}
export default DrawerNavigation;