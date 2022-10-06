import { Checkbox, HStack, Input, Text, VStack } from 'native-base'
import React from 'react'
import Label from '../Label'
import FormCard from './FormCard'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../asset/color';
import CustomInputIcon from '../CustomInputIcon';
import { Picker } from '@react-native-picker/picker';

const Details = () => {

    const styles = {
        type : {
            borderColor : '#CDD2D8',
            borderWidth : 1,
            height : 40,
            marginBottom : -12
        },
        pick : {
            backgroundColor : colors.borderTable,
            color : 'red'
        },
        input : {
            paddingTop : 10,
            paddingLeft : 10,
        },
        circle : {
            borderColor : colors.primaryBlack,
            borderRadius : 20,
            borderWidth : 1,
            height : 25,
            width : 25,
        },
        num : {
            fontSize : 14,
            lineHeight : 18,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        },
        check : {
            fontSize : 16,
            lineHeight : 24,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        }
    }

    return (
        <FormCard header='Details'>
            <VStack space={6}>
                <VStack space={3}>
                    <Label header='Category' />
                    <Picker
                        placeholder='rice'
                        style={styles.pick}
                    />
                </VStack>
                <VStack space={3}>
                    <Label header='Product code / SKU' icon={true} />
                    <Input placeholder='Leave empty to automatically generate' />
                </VStack>

                <VStack space={3}>
                    <Label header='Weight' />
                    <CustomInputIcon bg={colors.white}>
                        <HStack alignItems='center' space={2}>
                            <FontAwesome5 size={15} name='weight-hanging' color={colors.primaryBlack} />
                            <Text style={styles.num}>0 g</Text>
                        </HStack>
                    </CustomInputIcon>
                </VStack>

                <VStack space={3}>
                    <Label header='Availability' />
                    <CustomInputIcon bg={colors.white}>
                        <HStack alignItems='center' space={2}>
                            <Feather size={15} name='codesandbox' color={colors.primaryBlack} />
                            <Text style={styles.num}>0</Text>
                        </HStack>
                    </CustomInputIcon>
                </VStack>

                <Checkbox value="one"_text={styles.check}>
                    This is a featured product
                </Checkbox>
            </VStack>
        </FormCard>
    )
}

export default Details