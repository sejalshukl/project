import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // Add navigation logic here, for example:
      navigation.navigate('FrontPage');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInDownBig"
        duration={2000}
        style={styles.text}>
        Country Live
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Splash;
