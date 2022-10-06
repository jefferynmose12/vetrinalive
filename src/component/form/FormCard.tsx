import { Box, Heading, VStack, ScrollView, Text, HStack, Pressable, Spacer, Switch, Image } from "native-base";
import React from 'react';
import { colors } from "../../asset/color";
import { FormCardProps } from "../../type";

const FormCard = ({header, children} : FormCardProps) => {

    const styles = {
        card : {
            width : '100%',
            maxWidth : '100%',
            borderRadius : 10,
            backgroundColor : colors.white,
            padding : 24,
        },
        header : {
            fontSize : 20,
            lineHeight : 25,
            color : colors.primaryBlack
        },
        main : {
            paddingTop : 20,
        }
    }

    return (
        <Box shadow={3} style={styles.card}>
            <Heading fontWeight='600' style={styles.header}>{header}</Heading>
            <Box style={styles.main}>
                {children}
            </Box>
        </Box>
    )
}

export default FormCard