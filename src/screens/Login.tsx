import React from 'react';
import { Text, Box, VStack, ScrollView, Pressable, HStack } from "native-base";
import VetrinaHead from '../component/VetrinaHead';
import ContentSign from '../component/ContentSign';
import TextInput from '../component/TextInput';
import ButtonSign from '../component/ButtonSign';
import DividerCon from '../component/DividerCon';
import Social from '../component/Social';
import Support from '../component/Support';
import { colors } from '../asset/color';
import StatusBarCon from '../component/StatusBarCon';

const Login = ({navigation} : any) => {

    const styles = {
        box : {
            paddingTop : 20,
            paddingBottom : 50,
            paddingHorizontal : 12,
            flex : 1,
            backgroundColor : 'white',
        },
        text : {
            fontSize : 18,
            lineHeight : 24,
            paddingTop : 8,
            color : colors.blackTints
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
        },
    }

    const handleLinkDrawer = () => {
        navigation.navigate('DrawerCon');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={styles.box} alignItems='center'>
                <StatusBarCon />
                <VetrinaHead />
                <ContentSign 
                    head='Welcome' 
                >
                    <Text style={styles.text} textAlign='center'>
                        Enter your email and password to {"\n"} access your account
                    </Text>
                </ContentSign>
                
                <VStack alignItems='center' style={styles.form} space={5}>
                    <TextInput size='lg' name='Email' wide={true} />
                    <TextInput size='lg' name='Password' wide={true} />
                    <ButtonSign text='Login' wide={true} navigation={handleLinkDrawer} />
                </VStack>

                <DividerCon wide={true} />

                <VStack alignItems='center' style={styles.social} space={5}>
                    <Social text='Sign up with Facebook' social={true} wide={true}  />
                    <Social text='Sign up with Google' wide={true} />
                </VStack>

                <HStack style={styles.forget} alignItems='center' space={1}>
                    <Text style={styles.questionText}>Did you forget your password?</Text>
                    <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={styles.questionTextColor}>Forget password</Text>
                    </Pressable>
                </HStack>

                <HStack style={styles.question} alignItems='center' space={1}>
                    <Text style={styles.questionText}>Do not you have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.questionTextColor}>Register now</Text>
                    </Pressable>
                </HStack>

                
                <Support />

            </Box>
        </ScrollView>
    )
}

export default Login