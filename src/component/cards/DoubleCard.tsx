import { Text, Box, Image, Divider } from "native-base";
import React from 'react';
import { colors } from '../../asset/color';
import LinkCon from "../LinkCon";
import CardHeadIcon from "../CardHeadIcon";

const DoubleCard = () => {

    const styles = {
        card : {
            backgroundColor : colors.primaryBlack,
            width : '100%',
            maxWidth : '100%',
            paddingHorizontal : 23,
            paddingVertical : 28
        },
        content : {
            paddingVertical : 20
        },
        contentText : {
            fontSize: 18,
            lineheight: 24,
            color : '#F5F5F5',
            fontFamily : 'SourceSansPro-Regular'
        },
        green : {
            color : colors.primaryGreen
        },
        divide : {
            marginVertical : 30,
            height : 1.1
        },
        textBottom : {
            paddingTop : 20,
            color : '#F5F5F5',
            fontSize : 12,
            lineHeight : 16,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <Box rounded='xl' shadow={3} style={styles.card}>
            <CardHeadIcon>
                <Image
                    source={require(`../../asset/images/grouphead.png`)}
                    alt='grouphead'
                    width={125}
                />
            </CardHeadIcon>

            <Box style={styles.content}>
                <Text style={styles.contentText}>
                    Write a <Text style={styles.green}> positive</Text> review on Capterra and receive 
                    the extension with <Text fontWeight='600'> 50 additional products.</Text>
                </Text>
            </Box>

            <LinkCon link="Write a review on Capterra" />

            <Divider bg={colors.white} style={styles.divide} />

            <CardHeadIcon>
                <Image
                    source={require(`../../asset/images/trustpilot.png`)}
                    alt='trustpilot'
                    width={125}
                />
            </CardHeadIcon>

            <Box style={styles.content}>
                <Text style={styles.contentText}>
                    Show us your love by leaving a <Text style={styles.green}>positive </Text> 
                    review on trust pilot and receive the extension of 
                    <Text fontWeight='600'> 50 additional products</Text>
                </Text>
            </Box>

            <LinkCon link="Write a review on Trustpilot" />

            <Text style={styles.textBottom}>* The two promotions are cumulative</Text>

        </Box>
    )
}

export default DoubleCard