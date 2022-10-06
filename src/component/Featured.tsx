import { Box, VStack, ScrollView, Text, HStack, Pressable, Spacer } from "native-base";
import React from 'react'
import { colors } from '../asset/color';
import Feather from 'react-native-vector-icons/Feather';

const Featured = ({navigation} : any) => {

    const styles = {
        headText : {
            fontSize : 13,
            lineHeight : 16,
            color : colors.blackTints,
            fontFamily : 'SourceSansPro-Regular'
        },
        boxcon : {
            marginTop : 5,
        },
        btnCon : {
            borderRadius : 5,
            backgroundColor : colors.primary,
            height : 40,
            width : 40,
        }
    }

    return (
        <HStack alignItems='center' style={styles.boxcon}>
            <Text style={styles.headText}>Featured products (7/10)</Text>
            <Spacer />
            <Pressable onPress={() => navigation.navigate('NewProduct')} style={styles.btnCon} alignItems='center' justifyContent='center'>
                <Feather size={22} name='plus' color={colors.white} />
            </Pressable>
        </HStack>
    )
}

export default Featured