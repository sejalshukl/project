import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';

const FrontPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  const handleSignUp = () => {
    navigation.navigate('Signup'); // Navigate to the SignUp screen
  };

  const animatedValueTopLeft = useRef(new Animated.Value(0)).current;
  const animatedValueBottomRight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateDiagonals();
  }, []);

  const animateDiagonals = () => {
    Animated.parallel([
      Animated.timing(animatedValueTopLeft, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValueBottomRight, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const diagonalTopLeft = animatedValueTopLeft.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '50%'], // Update the output range
  });

  const diagonalBottomRight = animatedValueBottomRight.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '-50%'], // Update the output range
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.diagonalTopLeft,
          {
            width: diagonalTopLeft,
          },
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          styles.diagonalBottomRight,
          {
            width: diagonalBottomRight,
          },
        ]}
      ></Animated.View>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
    position: 'relative',
  },
  diagonalTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderStyle: 'solid',
    borderTopWidth: 200,
    borderRightWidth: 200,
    borderTopColor: 'red',
    borderRightColor: 'transparent',
    zIndex: 0,
  },
  diagonalBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderStyle: 'solid',
    borderBottomWidth: 200,
    borderLeftWidth: 200,
    borderBottomColor: 'red',
    borderLeftColor: 'transparent',
    zIndex: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333', // Dark text color
    zIndex: 1,
  },
  button: {
    backgroundColor: 'red', // Orange color
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    zIndex: 1,
  },
  buttonText: {
    color: '#fff', // White color
    fontSize: 16,
  },
});

export default FrontPage;
