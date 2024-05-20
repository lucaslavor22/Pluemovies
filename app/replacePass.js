import  { Text, View, TextInput, Pressable, Image, StatusBar } from "react-native";
import { styles } from '../src/styles';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../src/firebase.config'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import logoImage from '../src/img/logo1.png';

export default function replacePass() {

    const [userEmail, setUserEmail] = useState('');
    const router = useRouter();

    function index() {
        router.replace('/');
    }

    function replacePass() {
        if(userEmail !== ''){
            sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Foi enviado um email para: ' + userEmail + '. Verifique o seu email.');
                router.replace('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert('Ops! Alguma coisa não de certo. ' + errorMessage + '. Tente novamente ou pressione voltar');
                return;
            })
        } else {
            alert('É preciso informar a e-mail válido');
            return;
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.topBarNewUser}>
            <Pressable onPress={index}>
                <Ionicons name='chevron-back-outline' size={32} color={'white'}/>
            </Pressable>
            </View>
            <Image source={logoImage} style={styles.logoImageReplacePass}/>
            <Text style={styles.formTitle}>Redefinição de Senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Informe o email"
                placeholderTextColor='#EC4424'
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userEmail}
                onChangeText={setUserEmail}
            />
            <Pressable
                style={styles.formButton}
                onPress={replacePass}
            >
                <Text style={styles.textButton}>Enviar</Text>
            </Pressable>
            <View style={styles.subContainer}>
                <Pressable
                    onPress={() => router.push('/')}
                >
                    <Text>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}