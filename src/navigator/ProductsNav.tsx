import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import NewProduct from "../screens/NewProduct";
import { Box } from "native-base";
import StatusBarCon from "../component/StatusBarCon";
import HeroHead from "../component/HeroHead";
import { colors } from "../asset/color";

const Stack = createNativeStackNavigator();

const ProductsNav = ({navigation} : any) => {

  const styles = {
    box : {
      flex : 1,
      backgroundColor : colors.body,
    }
  }

  return (
    <Box style={styles.box}>
      <StatusBarCon />
      <HeroHead title='Products' navigation={navigation} option={true} />
      <Stack.Navigator
          initialRouteName="Products"
          screenOptions={{
              headerShown: false,
          }}
      >
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="NewProduct" component={NewProduct} />
      </Stack.Navigator>
    </Box>
  );
}

export default ProductsNav