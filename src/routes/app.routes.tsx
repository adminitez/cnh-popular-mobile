import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View } from 'react-native';

import { Home } from '../pages/UserLogged/Home/Home'
import { Notifications } from '../pages/UserLogged/Notifications/Notifications'

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
  )
}
