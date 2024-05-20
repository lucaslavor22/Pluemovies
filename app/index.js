import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/firebase.config';
import { useRouter } from 'expo-router';
import { styles } from '../src/styles';
import logoImage from '../src/img/logo1.png';


export default function App() {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function replacePass() {
    router.replace('/replacePass');
  }

  function newUser() {
    router.replace('/newUser');
  }

  function userLogin() {
    signInWithEmailAndPassword(auth, userEmail, userPass)
       .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/home');
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert('Algum campo está incorreto!');
       });
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={logoImage} style={styles.logoImage}/>
      <TextInput
        style={styles.formInput}
        placeholder='Informe o e-mail'
        placeholderTextColor='#EC4424'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        style={styles.formInput}
        placeholder='Informe a senha'
        placeholderTextColor='#EC4424'
        keyboardType='numeric'
        autoCapitalize='none'
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />

      <Pressable style={styles.formButton} onPress={userLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton} onPress={replacePass}>Esqueci a senha</Text>
        </Pressable>

        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton} onPress={newUser}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
}


