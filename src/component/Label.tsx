import React from 'react'
import { Heading, HStack, Spacer } from 'native-base';
import { LabelProps } from '../type';
import { colors } from '../asset/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Label = ({header, icon} : LabelProps) => {

    const styles = {
        header : {
            fontSize : 15,
            lineHeight : 20,
            color : colors.blackTints,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    return (
        <HStack>
            <Heading fontWeight='600' style={styles.header}>{header}</Heading>
            <Spacer />
            {
                icon && <MaterialCommunityIcons size={22} name='information-outline' color={colors.blackDefault} />
            }
        </HStack>
    )
}

export default Label