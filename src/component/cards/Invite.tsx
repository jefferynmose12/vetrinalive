import { Text, Box } from "native-base";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../asset/color";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Invite = () => {

    const styles = {
        headText : {
            fontSize : 22,
            lineHeight : 27,
            color : colors.primaryBlack
        },
        content : {
            paddingTop : 25,
            paddingBottom : 10
        },
        text : {
            fontSize : 18,
            lineHeight : 24,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        },
        span : {
            color : colors.primaryGreen
        }
    }

    return (
        <MainCard link="Start inviting friends!" arrow={true} space={true}>
            <CardHeadIcon header='Invite a friend!'>
                <Feather size={25} name='users' color={colors.primaryBlack} />
            </CardHeadIcon>
            <Box style={styles.content}>
                <Text style={styles.text} fontWeight='600'>
                    <Text style={styles.span}>Receive 50 products</Text> by inviting a friend who subscribes 
                    to a plan. Your friend will receive a 30% discount coupon 
                    valid for any plan.
                </Text>
            </Box>
        </MainCard>
    )
}

export default Invite