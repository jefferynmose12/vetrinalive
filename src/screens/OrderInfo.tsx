import React from 'react';
import { Box, HStack, ScrollView } from 'native-base';
import StatusBarCon from '../component/StatusBarCon';
import { colors } from '../asset/color';
import OrderInfoHeader from '../component/OrderInfoHeader';
import Tab from '../component/Tab';
import Info from '../component/Info';
import Address from '../component/Address';
import ShippingInfo from '../component/ShippingInfo';
import Total from '../component/Total';

const OrderInfo = ({navigation} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.white,
            paddingHorizontal : 16,
            paddingVertical : 10,
        },
        border : {
            paddingTop : 20,
            paddingBottom : 4,
            borderBottomWidth : 1,
            borderBottomColor : colors.borderTable
        },
        body : {
            paddingVertical : 18,
        },
    }

    return (
        <Box style={styles.box}>
            <StatusBarCon />
            <OrderInfoHeader navigation={navigation} />
            <HStack alignItems='center' style={styles.border}>
                <Tab wide={true} text='Info orders' tab={true} bcolor={colors.primary} />
                <Tab wide={true} text='Products' bcolor={colors.white} />
                <Tab wide={true} text='Shipping' bcolor={colors.white} />
            </HStack>

            <ScrollView style={styles.body} flex={1} showsVerticalScrollIndicator={false}>
                <Info />
                <Address />
                <ShippingInfo />
                <Total navigation={navigation} />
            </ScrollView>
        </Box>
    )
}

export default OrderInfo