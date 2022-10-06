import { Box, Heading } from "native-base";
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../asset/color";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Visitor = () => {

    const styles = {
        headText : {
            fontSize : 22,
            lineHeight : 27,
            color : colors.primaryBlack
        },
        num : {
            paddingTop : 50,
            paddingBottom : 15,
            fontSize : 42,
            lineHeight : 39,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    return (
        <MainCard link="Vuoi ricevere più visite? Contattaci!" arrow={true}>
            <CardHeadIcon header='Visitors' select={true}>
                <Ionicons size={25} name='eye-outline' color={colors.primaryBlack} />
            </CardHeadIcon>
            <Box>
                <Heading style={styles.num} textAlign='center' fontWeight='600'>0</Heading>
            </Box>
        </MainCard>
    )
}

export default Visitor