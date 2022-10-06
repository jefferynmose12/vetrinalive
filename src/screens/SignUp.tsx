import React from 'react';
import { Text, Box, VStack, ScrollView, HStack, Pressable } from "native-base";
import VetrinaHead from '../component/VetrinaHead';
import ContentSign from '../component/ContentSign';
import TextInput from '../component/TextInput';
import ButtonSign from '../component/ButtonSign';
import DividerCon from '../component/DividerCon';
import Social from '../component/Social';
import Support from '../component/Support';
import { colors } from '../asset/color';
import StatusBarCon from '../component/StatusBarCon';

const SignUp = ({navigation} : any) => {

    const styles = {
        box : {
            paddingTop : 20,
            paddingBottom : 50,
            paddingHorizontal : 7.8,
            flex : 1,
            backgroundColor : 'white',
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
        question : {
            paddingVertical : 30,
        },
        questionText : {
            fontSize : 16,
            lineHeight : 24,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-Regular'
        },
        questionTextColor : {
            color : colors.primary,
            fontFamily : 'SourceSansPro-Regular'
        }
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
                    head='Create your e-commerce'
                >
                    <Text style={styles.text} textAlign='center'>
                        Prova Vetrina Live gratuitamente per 7 giornie 
                        apriil tuo negozio online in pochi minuti. {"\n"}Nessuna carta di credito richiesta.
                    </Text>
                </ContentSign>
                
                <VStack alignItems='center' style={styles.form} space={4}>
                    <TextInput size='lg' name='Name and Surname' />
                    <TextInput size='lg' name='Email' />
                    <TextInput size='lg' name='Password' />
                    <ButtonSign text='Create your shop' navigation={handleLinkDrawer} />
                </VStack>

                <DividerCon />

                <VStack alignItems='center' style={styles.social} space={5}>
                    <Social text='Sign up with Facebook' social={true} />
                    <Social text='Sign up with Google' />
                </VStack>


                <HStack style={styles.question} alignItems='center' space={1}>
                    <Text style={styles.questionText}>Do you have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.questionTextColor}>Sign in now</Text>
                    </Pressable>
                </HStack>

                
                <Support />

            </Box>
        </ScrollView>
    )
}

export default SignUp