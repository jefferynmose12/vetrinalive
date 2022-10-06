import React from 'react';
import { Box, HStack, Text, VStack, Pressable } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../asset/color';
import TotalItem from './TotalItem';

const Total = ({navigation : {goBack}} : any) => {

    const styles = {
        box : {
            marginTop : 50,
            paddingBottom : 15,
        },
        bottom : {
            marginVertical : 30,
        },
        btn : {
            width : '100%',
            borderRadius : 5,
            backgroundColor : colors.blue,
            paddingVertical : 22
        },
        btnText : {
            fontSize : 18,
            lineHeight : 24,
            color : colors.white,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <Box style={styles.box}>
            <VStack space={5}>
                <TotalItem head='Subtotal' num='€ 47,00' />
                <TotalItem head='Courier Shipping' num='€ 2,00' arrow={true} />
                <TotalItem head='Total' num='€ 49,00' />
            </VStack>
            <Box style={styles.bottom}>
                <Pressable shadow={3} style={styles.btn} onPress={() => goBack()}>
                    <HStack alignItems='center' justifyContent='center'>
                        <Text style={styles.btnText}>Shipped</Text>
                        <Entypo size={25} name='chevron-small-down' color={colors.white} />
                    </HStack>
                </Pressable>
            </Box>
        </Box>
    )
}

export default Total