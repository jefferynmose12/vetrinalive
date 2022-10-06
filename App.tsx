import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";
import ForgetPassword from "./src/screens/ForgetPassword";
import DrawerCon from "./src/navigator/DrawerCon";
import OrderInfo from "./src/screens/OrderInfo";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="DrawerCon" component={DrawerCon} />
          <Stack.Screen name="OrderInfo" component={OrderInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}