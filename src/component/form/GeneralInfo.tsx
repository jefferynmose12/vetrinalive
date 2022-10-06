import { HStack, Input, TextArea, VStack } from 'native-base'
import React from 'react'
import Label from '../Label'
import FormCard from './FormCard'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../asset/color';

const GeneralInfo = () => {

    const styles = {
        type : {
            paddingVertical : 7,
            paddingHorizontal : 10,
            borderColor : '#CDD2D8',
            borderWidth : 1,
            height : 40,
            marginBottom : -12
        },
        input : {
            paddingTop : 10,
            paddingLeft : 10,
        }
    }

    return (
        <FormCard header='General Information'>
            <VStack space={6}>
                <VStack space={3}>
                    <Label header='Product name' />
                    <Input placeholder='Lorem ipsum' />
                </VStack>
                <VStack space={3}>
                    <Label header='Description' />
                    <HStack style={styles.type} alignItems='center' justifyContent='space-around'>
                        <Foundation size={22} name='bold' color={colors.iconInput} />
                        <FontAwesome5 size={15} name='italic' color={colors.iconInput} />
                        <MaterialIcons size={22} name='format-strikethrough' color={colors.iconInput} />
                        <Feather size={22} name='underline' color={colors.iconInput} />
                        <Feather size={22} name='list' color={colors.iconInput} />
                        <Feather size={22} name='link-2' color={colors.iconInput} />
                    </HStack>
                    <TextArea style={styles.input} h={40} autoCompleteType aria-label="t1" placeholder="Description (0 / 5000)" />
                </VStack>
            </VStack>
        </FormCard>
    )
}

export default GeneralInfo