import { Text, HStack, Pressable, Spacer } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const OrderHead = () => {

    const styles = {
        headText : {
            fontSize : 17,
            lineHeight : 22,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        },
        FadeBtn : {
            paddingHorizontal : 16,
            height : 48,
            backgroundColor : colors.borderTable,
            borderRadius : 5
        },
        btnText : {
            fontSize : 16,
            lineHeight : 22,
            color : colors.blackLight,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <HStack alignItems='center'>
            <Text style={styles.headText}>Orders: 24</Text>
            <Spacer />
            <Pressable style={styles.FadeBtn} justifyContent='center'>
                <HStack alignItems='center' space={2}>
                    <Text style={styles.btnText}>Ship order</Text>
                    <EvilIcons size={35} name='external-link' color={colors.blackLight} />
                </HStack>
            </Pressable>
        </HStack>
    )
}

export default OrderHead