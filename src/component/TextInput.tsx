import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'native-base'
import { TextInputProps } from '../type'

const TextInput = ({size, name, wide} : TextInputProps) => {

    const styles = {
        input : {
            height : 52,
            paddingLeft : 22,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <Input size={size} placeholder={name} w={wide ? '100%' : '85%'} style={styles.input} />
    )
}

export default TextInput