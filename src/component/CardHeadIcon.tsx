import { Text, Box, HStack, Spacer, Heading } from "native-base";
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import { colors } from "../asset/color";
import { CardHeadIconProps } from "../type";

const CardHeadIcon = ({children, header, select} : CardHeadIconProps) => {

    const styles = {
        headText : {
            fontSize : 22,
            lineHeight : 27,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        },
        month : {
            fontSize : 14,
            color : colors.blackTintsLight,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <HStack>
            <HStack space={5} alignItems='center'>
                {children}
                <Text fontWeight={600} style={styles.headText}>{header}</Text>
            </HStack>
            <Spacer />
            {
                select && (
                    <HStack alignItems='center' space={3}>
                        <Text fontWeight='16' style={styles.month}>October</Text>
                        <Entypo size={16} name='chevron-small-down' color={colors.blackTintsLight} />
                    </HStack>
                )
            }
        </HStack>
    )
}

export default CardHeadIcon