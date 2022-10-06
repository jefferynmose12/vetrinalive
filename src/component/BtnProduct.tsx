import { Text, Pressable, HStack } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import { BtnProductProps } from "../type";
import Entypo from 'react-native-vector-icons/Entypo';

const BtnProduct = ({text, navigation : { goBack }} : BtnProductProps) => {

    const styles = {
        btn : {
            borderColor : colors.primary,
            backgroundColor : 'white',
            borderWidth : 1,
            borderRadius : 30,
            width : '45%',
            height : 50,
            paddingHorizontal : 8
        },
        btnText : {
            fontSize : 16,
            lineHeight : 22,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    return (
        <Pressable onPress={() => goBack()} shadow={3} style={styles.btn} justifyContent='center'>
            <HStack space={1} alignItems='center'>
                <Entypo size={40} name='chevron-small-left' color={colors.blackTintsLight} />
                <Text fontWeight='600' style={styles.btnText}>{text}</Text>
            </HStack>
        </Pressable>
    )
}

export default BtnProduct