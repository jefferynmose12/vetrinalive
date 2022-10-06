import { Box, ScrollView, VStack } from "native-base";
import React from 'react'
import { colors } from "../asset/color";
import { subscriptions } from "../asset/item/Items";
import HeroHead from "../component/HeroHead";
import StatusBarCon from "../component/StatusBarCon";
import SubscriptionCard from "../component/SubscriptionCard";
import SubscriptionHeader from "../component/SubscriptionHeader";

const Subscription = ({navigation} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.body,
        },
        body : {
            flex : 1,
            paddingHorizontal : 16,
            paddingVertical : 16,
        },
        cards : {
            flex : 1,
            marginTop : 50
        },
    }

    return (
        <Box style={styles.box}>
            <StatusBarCon />
            <HeroHead title='Subscription' navigation={navigation} />
            <Box style={styles.body}>
                <SubscriptionHeader />

                <Box style={styles.cards}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <VStack space={5} pb={8}>
                            {
                                subscriptions.map((sub, index) => (
                                    <SubscriptionCard key={index} sub={sub}  />
                                ))
                            }
                        </VStack>
                    </ScrollView>
                </Box>
            </Box>
        </Box>
    )
}

export default Subscription