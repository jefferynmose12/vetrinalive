import { Box, HStack, Heading, Spacer, Pressable } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import Feather from 'react-native-vector-icons/Feather';
import { HeroHeadProps } from "../type";

const HeroHead = ({title, navigation, option} : HeroHeadProps) => {

    const styles = {
        head : {
            paddingBottom : 12,
            paddingHorizontal : 16,
            backgroundColor : colors.white
        },
        headText : {
            fontSize : 20,
            lineHeight : 25,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    const handleNavDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <Box shadow='3' style={styles.head}>
            <HStack alignItems='center'>
                <HStack alignItems='center' space={4}>
                    <Pressable onPress={handleNavDrawer}>
                        <Feather size={30} name='menu' color={colors.primaryBlack} />
                    </Pressable>
                    <Heading fontWeight='600' style={styles.headText}>{title}</Heading>
                </HStack>
                <Spacer />
                {
                    option && (
                        <HStack alignItems='center' space={8}>
                            <Feather size={28} name='search' color={colors.blackTintsLight} />
                            <Feather size={28} name='filter' color={colors.blackTintsLight} />
                        </HStack>
                    )
                }
            </HStack>
        </Box>
    )
}

export default HeroHead