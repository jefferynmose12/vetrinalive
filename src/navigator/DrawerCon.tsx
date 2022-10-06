import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../screens/DashBoard';
import CustomDrawer from './CustomDrawer';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../asset/color';
import ProductsNav from './ProductsNav';
import Payment from '../screens/Payment';
import Subscription from '../screens/Subsription';
import Orders from '../screens/Orders';

const Drawer = createDrawerNavigator();

const DrawerCon = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />} 
      initialRouteName='DashBoard' 
      screenOptions={{
        headerShown:false, 
        drawerLabelStyle: {marginLeft : -15},
        drawerActiveBackgroundColor : colors.primary,
        drawerActiveTintColor : colors.white
      }}
    >
      <Drawer.Screen name="DashBoard" component={DashBoard} options={{
        drawerIcon : ({color}) => (
          <Entypo size={22} name='home' color={color} />
        )}} 
      />
      <Drawer.Screen name="Products" component={ProductsNav} options={{
        drawerIcon : ({color}) => (
          <FontAwesome size={22} name='product-hunt' color={color} />
        )}} 
      />
      <Drawer.Screen name="Payment" component={Payment} options={{
        drawerIcon : ({color}) => (
          <MaterialIcons size={22} name='payment' color={color} />
        )}} 
      />
      <Drawer.Screen name="Orders" component={Orders} options={{
        drawerIcon : ({color}) => (
          <Octicons size={22} name='list-unordered' color={color} />
        )}} 
      />
      <Drawer.Screen name="Subscription" component={Subscription} options={{
        drawerIcon : ({color}) => (
          <MaterialIcons size={22} name='subscriptions' color={color} />
        )}} 
      />
    </Drawer.Navigator>
  )
}

export default DrawerCon;