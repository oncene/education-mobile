import React from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const Slider = ({item}) => {
  return (
    <ImageBackground
      source={require('../../../assets/intro_bg.png')}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <Image source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    textAlign: 'center',
    padding: 30,
  },
  title: {
    fontSize: 42,
    color: '#334357',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Slider;
