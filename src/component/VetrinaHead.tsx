import { Heading } from "native-base";
import React from 'react'
import { colors } from "../asset/color";

const VetrinaHead = () => {
    const styles = {
        box : {
            paddingTop : 25,
            flex : 1,
            backgroundColor : 'white',
        },
        head : {
            fontSize : 32,
        },
        span : {
            color : colors.primary,
            fontSize : 30,
        }
    }

    return (
        <Heading style={styles.head}>vetrina<Heading style={styles.span}>live</Heading></Heading>
    )
}

export default VetrinaHead