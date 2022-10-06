import { Text, Box, HStack, Image, Pressable } from "native-base";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../asset/color";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Customer = () => {

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
        text : {
            fontSize : 20,
            lineHeight : 25,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        },
        btn : {
            backgroundColor : colors.primary,
            height : 45,
            width : 110,
            borderRadius : 5
        },
        btnText : {
            fontSize : 16,
            lineHeight : 22,
            color : colors.white,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    return (
        <MainCard>
            <CardHeadIcon header='Customer support'>
                <Feather size={25} name='headphones' color={colors.primaryBlack} />
            </CardHeadIcon>
            <Box style={styles.content}>
                <HStack alignItems='center' space={3}>
                    <Image
                        source={require(`../../asset/images/person.png`)}
                        alt='pics'
                        size={10}
                    />
                    <Text style={styles.text}>Simone is here to help you</Text>
                </HStack>
            </Box>
            <Box alignItems='center' justifyContent='center'>
                <Pressable shadow={3} style={styles.btn} alignItems='center' justifyContent='center'>
                    <Text fontWeight='600' style={styles.btnText}>Contact us</Text>
                </Pressable>
            </Box>
        </MainCard>
    )
}

export default Customer