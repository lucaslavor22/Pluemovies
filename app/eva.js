import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet,StatusBar, Pressable, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');



  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      sender: 'user',
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: generatePrompt([...messages, newMessage]),
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-proj-Pls5B6FG77wWPRo8BMojT3BlbkFJkb1SLubaXw4vozGJPcaU`,
          },
        }
      );

      const botMessage = {
        sender: 'bot',
        text: response.data.choices[0].text.trim(),
      };

      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  const generatePrompt = (conversation) => {
    return conversation.map(msg => `${msg.sender === 'user' ? 'User' : 'Eva'}: ${msg.text}`).join('\n');
  };

  function Home() {
    router.replace('/home');
};

  return (
    <View style={styles.container}>
     <StatusBar hidden/>
     <View style={styles.topBar}>
                <Pressable onPress={Home}>
                    <Ionicons name='arrow-back-outline' size={32} color={'white'} />
                </Pressable>            
            </View>
      <View style={styles.robotContainer}>
        <Image source={require('../src/img/eva.png')} style={styles.robotImage} />
      </View>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite algo..."
          placeholderTextColor="#AAA"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Icon name="send" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    margin: 10
  },
  robotContainer: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    marginVertical: 20,
  },
  robotImage: {
    width: 100,
    height: 100,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#EC4424',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#444',
  },
  messageText: {
    color: '#FFF',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#EC4424',
    borderRadius: 20,
    padding: 10,
  },
});

export default ChatScreen;
