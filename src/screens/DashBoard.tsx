import { Box, VStack, ScrollView, Heading, Link } from "native-base";
import React from 'react'
import HeroHead from "../component/HeroHead";
import StatusBarCon from "../component/StatusBarCon";
import Configura from "../component/cards/Configura";
import Visitor from "../component/cards/Visitor";
import Order from "../component/cards/Order";
import Lastest from "../component/cards/Lastest";
import Extensions from "../component/cards/Extensions";
import Customer from "../component/cards/Customer";
import Invite from "../component/cards/Invite";
import DoubleCard from "../component/cards/DoubleCard";
import { colors } from "../asset/color";
import LinearGradient from "react-native-linear-gradient";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const DashBoard = ({navigation} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.body,
        },
        welcome : {
            height : 270,
        },
        inner : {
            paddingTop : 32,
            paddingHorizontal : 16,
        },
        headText : {
            color : colors.white,
            fontSize : 34,
            lineHeight : 38,
            fontFamily : 'SourceSansPro-SemiBold'
        },
        linkwhole : {
            marginTop : 22,
        },
        link : {
            color : 'white',
            fontSize : 17,
            fontFamily : 'SourceSansPro-Regular'
        },
        icon : {
            paddingLeft : 10
        },
        up : {
            marginTop : -80,
            paddingTop : 30,
            paddingHorizontal : 16,
        }
    }
    
    return (
        <Box style={styles.box}>
            <StatusBarCon />
            
            <LinearGradient colors={['#21B8F9', 'rgba(33, 184, 249, 0)']}  style={styles.welcome}>
                <HeroHead title='DashBoard' navigation={navigation} />
                <Box style={styles.inner}>
                    <Heading fontWeight={600} style={styles.headText}>Welcome Mario!</Heading>
                    <Link style={styles.linkwhole} _text={styles.link}>
                        app.vetrinalive.com/mario-store
                        <EvilIcons size={30} style={styles.icon} name='external-link' color='white' />
                    </Link>
                </Box>
            </LinearGradient>
            <Box flex={1}>
                <ScrollView style={styles.up} flex={1} showsVerticalScrollIndicator={false}>
                    <VStack space={6} pb={24}>
                        <Configura />
                        <Visitor />
                        <Order />
                        <Lastest />
                        <Extensions />
                        <DoubleCard />
                        <Customer />
                        <Invite />
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default DashBoard