import { Text, Box, HStack, Spacer, Heading, VStack } from "native-base";
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import { colors } from "../../asset/color";
import CardHeadIcon from "../CardHeadIcon";
import Orderlist from "../Orderlist";
import MainCard from "./MainCard";

const Order = () => {

    const styles = {
        headText : {
            fontSize : 22,
            lineHeight : 27,
            color : colors.primaryBlack
        },
        content : {
            paddingTop : 27,
            paddingBottom : 17
        }
    }

    return (
        <MainCard link="10 free tips to increase your sales" arrow={true}>
            <CardHeadIcon header='Order' select={true}>
                <Octicons size={25} name='list-unordered' color={colors.primaryBlack} />
            </CardHeadIcon>
            <Box style={styles.content}>
                <VStack space={3}>
                    <Orderlist text='Orders received:' num='0' />
                    <Orderlist text='Earnings:' num='€ 0,00' />
                </VStack>
            </Box>
        </MainCard>
    )
}

export default Order