import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { auth } from './components/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ar, bg } from '../assets/image/image';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!email) {
        alert('Please enter your email.');
        return;
      }
    
      if (!password) {
        alert('Please enter your password.');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');

      await AsyncStorage.setItem('userToken', userCredential.user.uid);

      navigation.navigate('HomeDrawer');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please check your email.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Invalid password. Please check your password.');
      } else {
        alert('Error during login: ' + error.message);
      }
    }
  };

  return (
    <LinearGradient colors={['#FF0000', '#FFFFFF']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
          <Text style={styles.btnTitle}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  btnContainer: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
});

export default Login;
