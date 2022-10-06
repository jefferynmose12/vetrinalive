import React from 'react';
import { Text, Box, VStack, HStack, Pressable } from "native-base";
import VetrinaHead from '../component/VetrinaHead';
import ContentSign from '../component/ContentSign';
import TextInput from '../component/TextInput';
import ButtonSign from '../component/ButtonSign';
import Support from '../component/Support';
import { colors } from '../asset/color';
import StatusBarCon from '../component/StatusBarCon';

const ForgetPassword = ({navigation} : any) => {

    const styles = {
        box : {
            paddingTop : 20,
            paddingBottom : 50,
            paddingHorizontal : 12,
            backgroundColor : colors.white,
        },
        text : {
            fontSize : 18,
            lineHeight : 24,
            paddingTop : 8,
            color : colors.blackTints,
            fontFamily : 'SourceSansPro-Regular'
        },
        form : {
            paddingTop : 14,
            width : '100%',
        },
        social : {
            width : '100%'
        },
        forget : {
            paddingTop : 20,
        },
        question : {
            paddingTop : 20,
            paddingBottom : 30,
        },
        questionText : {
            fontSize : 16,
            lineHeight : 24,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        },
        questionTextColor : {
            color : colors.primary
        }
    }

    const handleLinkDrawer = () => {
        navigation.navigate('DrawerCon');
    }

    return (
        <Box flex={1} style={styles.box} alignItems='center'>
            <StatusBarCon />
            <VetrinaHead />
            <ContentSign 
                head='Forgot Password' 
            >
                <Text style={styles.text} textAlign='center'>
                    Enter your email and you will receive an email {"\n"} to recover your password
                </Text>
            </ContentSign>
            
            <VStack alignItems='center' style={styles.form} space={5}>
                <TextInput size='lg' name='Email' wide={true} />
                <ButtonSign text='Login' wide={true} navigation={handleLinkDrawer} />
            </VStack>

            <HStack style={styles.question} alignItems='center' space={1}>
                <Text style={styles.questionText}>Do not you have an account?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.questionTextColor}>Register now</Text>
                </Pressable>
            </HStack>

            <Support />
        </Box>
    )
}

export default ForgetPassword