import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyB5QpiXMKOUkaJGG1jJnwAZHlmUIQRglNY",
    authDomain: "pluesoft-a6d22.firebaseapp.com",
    databaseURL: "https://pluesoft-a6d22-default-rtdb.firebaseio.com",
    projectId: "pluesoft-a6d22",
    storageBucket: "pluesoft-a6d22.appspot.com",
    messagingSenderId: "17598992931",
    appId: "1:17598992931:web:a6c139260ab5cb88cdd796"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };



  
