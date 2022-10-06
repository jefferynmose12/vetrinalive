import { Box, Heading, VStack, ScrollView, HStack } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import BtnProduct from "../component/BtnProduct";
import Tab from "../component/Tab";
import GeneralInfo from "../component/form/GeneralInfo";
import Price from "../component/form/Price";
import Details from "../component/form/Details";
import ProductType from "../component/form/ProductType";

const NewProduct = ({navigation} : any) => {

  const styles = {
    body : {
      flex : 1,
      paddingHorizontal : 16,
      paddingVertical : 16,
    },
    headBox : {
      marginTop : 20,
    },
    headText : {
      fontSize : 28,
      lineHeight : 32,
      color : colors.primaryBlack,
      fontFamily : 'SourceSansPro-SemiBold'
    },
    main : {
      marginTop : 25,
      flex : 1
    },
    up : {
      paddingTop : 30,
    }
  }

  return (
    <Box style={styles.body}>
      <BtnProduct text='All Products' navigation={navigation}  />

      <Box style={styles.headBox}>
        <Heading fontWeight='600' style={styles.headText}>New product</Heading>
      </Box>

      <Box style={styles.main}>
        <HStack alignItems='center'>
          <Tab text='info' tab={true} bcolor={colors.primary} />
          <Tab text='variants' bcolor={colors.borderTable} />
        </HStack>

        <Box flex={1}>
          <ScrollView style={styles.up} flex={1} showsVerticalScrollIndicator={false}>
            <VStack space={6} pb={12}>
              <GeneralInfo />
              <Price />
              <Details />
              <ProductType />
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  )
}

export default NewProduct