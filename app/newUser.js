import { Text, View, TextInput, Pressable, Image, StatusBar} from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/firebase.config';
import { styles } from '../src/styles';
import { useRouter } from 'expo-router';
import logoImage from '../src/img/logo1.png';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function NewUser() {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const router = useRouter();

    function index() {
        router.replace('/');
    }

    function newUser() {
        if(userEmail === '' || userPass === '' || userRePass === ''){
        alert('Todos os campos devem ser preenchidos');
        return;
        }
        if(userPass !== userRePass){
            alert('A senha e a confirmação não são iguais!');
            return;
        } else {
            createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then((UserCredencial) => {
                const user = UserCredencial.user;
                alert('O usuário ' + userEmail + ' foi criado. Faça o login.');
                router.replace('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                router.replace('/');
            })    
        }
        }

    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.topBarNewUser}>
            <Pressable onPress={index}>
                <Ionicons name='chevron-back-outline' size={32} color={'white'}/>
            </Pressable>
            </View>
            <Image source={logoImage} style={styles.logoImageNewUser}/>
            <Text style={styles.formTitle}>Crie sua conta</Text>
            <TextInput 
                style={styles.formInput}
                placeholder="E-mail de usuário"
                placeholderTextColor='#EC4424'
                keyboard="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userEmail}
                onChangeText={setUserEmail}
            />
            <TextInput
                style={styles.formInput}         
                placeholder="Senha de usuário"
                placeholderTextColor='#EC4424'
                autoCapitalize="none"
                keyboardType="numeric"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Repita a senha"
                placeholderTextColor='#EC4424'
                autoCapitalize="none"
                keyboardType="numeric"
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />
            <Pressable
                style={styles.formButton}
                onPress={newUser}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}