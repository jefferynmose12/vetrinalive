import { Box, Link } from 'native-base'
import React from 'react'
import { MainCardProps } from '../../type'
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { colors } from '../../asset/color';

const MainCard = ({children, link, arrow, linkicon, space, pr} : MainCardProps) => {

    const styles = {
        card : {
            backgroundColor : 'white',
            width : '100%',
            maxWidth : '100%',
            paddingLeft : 23,
            paddingRight : pr? 0 : 23,
            paddingVertical : 28
        },
        linkwhole : {
            marginTop : link ? 22 : 0,
        },
        link : {
            color : colors.primary,
            fontSize : 17,
            lineHeight : 20,
            fontFamily : 'SourceSansPro-Regular'
        },
        icon : {
            paddingLeft : pr? 0 : 20,
            paddingRight : pr? 23 : 0,
        }
    }

    return (
        <Box rounded='xl' shadow={3} style={styles.card} overflow='hidden'>
            {children}
            <Link style={styles.linkwhole} _text={styles.link} alignItems='center' justifyContent={space ? 'space-between' : 'center'}>
                {link}
                {arrow && <AntDesign size={22} style={styles.icon} name='arrowright' color={colors.primary} />}
                {linkicon && <EvilIcons size={35} style={styles.icon} name='external-link' color={colors.primary} />}
            </Link>
        </Box>
    )
}

export default MainCard