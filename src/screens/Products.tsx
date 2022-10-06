import { Box, Text, HStack, Image } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import Entypo from 'react-native-vector-icons/Entypo';
import Featured from "../component/Featured";
import { tableList } from "../asset/item/Items";
import CustomSwitch from "../component/CustomSwitch";

const Products = ({navigation} : any) => {

  const styles = {
    box : {
      flex : 1,
      backgroundColor : colors.body,
    },
    body : {
      flex : 1,
      paddingHorizontal : 16,
      paddingVertical : 16,
    },
    headText : {
      fontSize : 13,
      lineHeight : 16,
      color : colors.blackTints,
      fontFamily : 'SourceSansPro-Regular'
    },
    switch : {
      marginTop : 10
    },
    table : {
      marginTop : 25,
      backgroundColor : colors.white,
      borderRadius : 10
    },
    tableHead : {
      borderBottomColor : colors.borderTable,
      borderBottomWidth : 1,
    },
    HeadItemOne : {
      paddingVertical : 13,
      paddingLeft : 13,
      width : "55%",
      borderRightColor : colors.borderTable,
      borderRightWidth : 1,
    },
    HeadItemTwo : {
      paddingVertical : 13,
      paddingLeft : 13,
      width : "28%",
      borderRightColor : colors.borderTable,
      borderRightWidth : 1,
    },
    HeadItemThree : {
      paddingVertical : 13,
      width : "17%",
    },
    tableHeadText : {
      fontSize : 17,
      lineHeight : 22,
      color : colors.tableHead,
      fontFamily : 'SourceSansPro-SemiBold'
    },
    bodyfirsttext : {
      fontSize : 14,
      lineHeight : 16,
      color : colors.primaryBlack,
      fontFamily : 'SourceSansPro-Regular'
    },
    bottom : {
      paddingVertical : 10,
      paddingHorizontal : 35
    },
    small : {
      fontSize : 10,
      lineHeight : 18,
      color : colors.blackTintsLight,
      fontFamily : 'SourceSansPro-SemiBold'
    }
  }

  return (
      <Box style={styles.body}>
        <Text style={styles.headText}>Products ( 24 / 100 )</Text>
        <Featured navigation={navigation} />
        <Box style={styles.switch} alignItems='flex-start'>
          <CustomSwitch  select={false} />
        </Box>
        <Box style={styles.table} shadow={4}>
          <HStack style={styles.tableHead}>
            <Box style={styles.HeadItemOne}>
              <Text fontWeight='600' style={styles.tableHeadText}>Product name</Text>
            </Box>
            <Box style={styles.HeadItemTwo}>
              <Text fontWeight='600' style={styles.tableHeadText}>Price</Text>
            </Box>
            <Box style={styles.HeadItemThree} justifyContent='center' alignItems='center'>
              <Entypo size={20} name='dots-three-horizontal' color={colors.primaryBlack}  />
            </Box>
          </HStack>

          {/* Table body text */}

          {
            tableList.map((product, index) => (
              <HStack key={index} style={styles.tableHead}>
                <Box style={styles.HeadItemOne}>
                  <HStack space={1} alignItems='center'>
                    <Image
                      source={require(`../asset/images/avatar.png`)}
                      alt='avatar'
                      size={8}
                    />
                    <Text style={styles.bodyfirsttext}>{product.name}</Text>
                  </HStack>
                </Box>
                <Box style={styles.HeadItemTwo} justifyContent='center'>
                  <HStack alignItems='center'>
                    <Text fontWeight='600' style={styles.bodyfirsttext}>{product.price}</Text>
                  </HStack>
                </Box>
                <Box style={styles.HeadItemThree} justifyContent='center' alignItems='center'>
                  <Entypo size={20} name='dots-three-horizontal' color={colors.primaryBlack}  />
                </Box>
              </HStack>
            ))
          }

          <HStack style={styles.bottom} space={8}>
            <Text fontWeight='600' style={styles.small}>P 25</Text>
            <Text fontWeight='600' style={styles.small}>1-25 of 25</Text>
          </HStack>
          
        </Box>
      </Box>
  )
}

export default Products