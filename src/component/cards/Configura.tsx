import { Text, Box, Heading } from "native-base";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../asset/color";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Configura = () => {

    const styles = {
        headText : {
            fontSize : 22,
            lineHeight : 27,
            color : colors.primaryBlack
        },
        content : {
            paddingTop : 25,
            paddingBottom : 15,
        },
        per : {
            color : 'red',
            fontSize : 34,
            lineHeight : 39,
            fontFamily : 'SourceSansPro-SemiBold'
        },
        com : {
            color : 'red',
            fontSize : 20,
            lineHeight : 25,
            fontFamily : 'SourceSansPro-Regular'
        },
        contentText : {
            fontFamily : 'SourceSansPro-Regular',
            paddingTop : 20,
            color : colors.blackDefault,
            fontSize : 20,
            lineHeight : 28,
        }
    }

    return (
        <MainCard link="Completa la configurazione!" arrow={true}>
            <CardHeadIcon header='Configura la tua vetrina'>
                <Feather size={25} name='tool' color={colors.primaryBlack} />
            </CardHeadIcon>
            <Box style={styles.content}>
                <Box>
                    <Heading textAlign='center' fontWeight={600} style={styles.per}>0%</Heading>
                    <Text textAlign='center' style={styles.com}>completato</Text>
                </Box>

                
                <Text style={styles.contentText} textAlign='center'>
                    Completa tutti i step per ricevere maggiore 
                    visibilità e una vetrina accattivante
                </Text>
            </Box>
        </MainCard>
    )
}

export default Configura