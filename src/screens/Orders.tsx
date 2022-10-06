import { Box, VStack, ScrollView } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import StatusBarCon from "../component/StatusBarCon";
import OrderHead from "../component/OrderHead";
import TableHead from "../component/TableHead";
import BodyTableText from "../component/BodyTableText";
import { orders } from "../asset/item/Items";
import HeroHead from "../component/HeroHead";

const Orders = ({navigation} : any) => {

  const styles = {
    box : {
      flex : 1,
      backgroundColor : colors.body,
    },
    body : {
      flex : 1,
      paddingHorizontal : 16,
      paddingTop : 28,
    },
    table : {
      flex : 1,
      marginTop : 30,
      backgroundColor : colors.white,
      paddingBottom : 10,
      borderRadius : 2
    },
  }

  return (
    <Box style={styles.box}>
      <StatusBarCon />
      <HeroHead title='Orders' navigation={navigation} option={true} />
      <Box style={styles.body}>
        <OrderHead />

        <Box style={styles.table}>

          {/* Table head */}

          <TableHead />

          {/* Table body text */}

          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack pb={12}>
              {
                orders.map((order, index) => (
                  <BodyTableText key={index} order={order} navigation={navigation} />
                ))
              }
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  )
}

export default Orders