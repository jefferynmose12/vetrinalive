import { Text, Box, HStack, Spacer, Heading, VStack, Image } from "native-base";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../asset/color";
import { items } from "../../asset/item/Items";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Lastest = () => {

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
        card : {
            backgroundColor : 'white',
            borderRadius : 10,
            paddingRight : 50
        },
        textContent : {
            paddingVertical : 5,
            paddingRight : 100
        },
        firstText : {
            fontSize : 12,
            lineHeight : 16,
            color : colors.primary,
            fontFamily : 'SourceSansPro-Regular'
        },
        header : {
            fontSize : 15,
            lineHeight : 20,
            color : colors.primaryBlack,
            width : '60%',
            fontFamily : 'SourceSansPro-SemiBold'
        },
        secondText : {
            fontSize : 12,
            lineHeight : 14,
            color : colors.blackDefault,
            fontFamily : 'SourceSansPro-Light'
        }   
    }

    return (
        <MainCard link="Visita il nostro Blog" linkicon={true}>
            <CardHeadIcon header='Lastest news'>
                <Feather size={25} name='file-text' color={colors.primaryBlack} />
            </CardHeadIcon>
            <VStack style={styles.content} space={7}>
                {
                    items && items.map((item, index) => (
                        <HStack key={index} space={3} style={styles.card} shadow={3} alignItems='center'>
                            <Image
                                source={item.img}
                                alt='image'
                                width='95'
                                height={120}
                            />
                            <VStack space={2} style={styles.textContent}>
                                <Text style={styles.firstText}>{item.textone}</Text>
                                <Heading fontWeight='600' style={styles.header}>{item.header}</Heading>
                                <Text fontWeight='300' style={styles.secondText}>{item.texttwo}</Text>
                            </VStack>
                        </HStack>
                    ))
                }
            </VStack>
        </MainCard>
    )
}

export default Lastest