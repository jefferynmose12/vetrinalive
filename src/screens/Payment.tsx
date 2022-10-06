import { Box, Heading, VStack, ScrollView } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import { payments } from "../asset/item/Items";
import CardPayment from "../component/CardPayment";
import HeroHead from "../component/HeroHead";
import StatusBarCon from "../component/StatusBarCon";

const Payment = ({navigation} : any) => {

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
    headBox : {
      marginTop : 20,
    },
    headText : {
      fontSize : 22,
      lineHeight : 27,
      color : colors.primaryBlack,
      fontFamily : 'SourceSansPro-SemiBold'
    },
    up : {
      paddingTop : 30,
    },
    card : {
      borderRadius : 5,
      padding : 18,
      backgroundColor : colors.white
    },
    disableBtn : {
      width : 80,
      height : 32,
      borderRadius : 5,
      backgroundColor : 'red',
    },
    disableText : {
      fontSize : 14,
      lineHeight : 16
    },
    cardText : {
      fontSize : 17,
      lineHeight : 22,
      color : colors.primaryBlack
    }
  }

  return (
    <Box style={styles.box}>
      <StatusBarCon />
      <HeroHead title='Payment' navigation={navigation} />
      <Box style={styles.body}>
        <Box style={styles.headBox}>
          <Heading fontWeight='600' style={styles.headText}>
            Payment methods
          </Heading>
        </Box>

        <Box flex={1}>
          <ScrollView style={styles.up} flex={1} showsVerticalScrollIndicator={false}>
            <VStack space={6} pb={20}>
              {
                payments.map((payment, index) => (
                  <CardPayment key={index} payment={payment} />
                ))
              }
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  )
}

export default Payment