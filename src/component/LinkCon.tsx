import { Link } from "native-base";
import React from 'react'
import { colors } from '../asset/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinkConProps } from "../type";

const LinkCon = ({link} : LinkConProps) => {

    const styles = {
        linkwhole : {
            marginTop : 22,
        },
        link : {
            color : colors.primaryGreen,
            fontSize : 17,
            lineHeight : 20,
            fontFamily : 'SourceSansPro-Regular'
        },
        icon : {
            paddingLeft : 20
        }
    }

    return (
        <Link style={styles.linkwhole} _text={styles.link} alignItems='center'>
            {link}
            <AntDesign size={22} style={styles.icon} name='arrowright' color={colors.primaryGreen} />
        </Link>
    )
}

export default LinkCon