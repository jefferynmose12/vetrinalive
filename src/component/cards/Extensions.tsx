import { Text, HStack, Heading, Image } from "native-base";
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../asset/color";
import BoxCard from "../BoxCard";
import CardHeadIcon from "../CardHeadIcon";
import MainCard from "./MainCard";

const Extensions = () => {

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
        num : {
            fontSize : 36,
            lineHeight : 41,
            color : colors.white,
            fontFamily : 'SourceSansPro-SemiBold'
        },
        text : {
            marginTop : 2,
            fontSize : 21,
            lineHeight : 26,
            color : colors.white,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <MainCard link="Discover all extensions" arrow={true} space={true} pr={true}>
            <CardHeadIcon header='Extensions Marketplace'>
                <MaterialCommunityIcons size={25} name='view-grid-plus-outline' color={colors.primaryBlack} />
            </CardHeadIcon>
            <HStack style={styles.content} space={5} overflow='hidden'>
                <BoxCard 
                    bg={colors.orangeDefault} 
                    text='Custom Domain'
                >
                    <Image
                        source={require(`../../asset/images/world.png`)}
                        alt='world'
                        size={60}
                    />
                </BoxCard>
                <BoxCard 
                    bg={colors.primaryGreen} 
                    text='+ 50 Products'
                    position='relative'
                >
                    <Heading fontWeight='600' style={styles.num}>+50</Heading>
                    <Text style={styles.text}>Prodotti</Text>
                </BoxCard>
            </HStack>
        </MainCard>
    )
}

export default Extensions