import React from 'react';
import {StatusBar, Text, ImageBackground, StyleSheet} from 'react-native';

import SlideOne from '../../../assets/slide_one.svg';
import SlideTwo from '../../../assets/slide_two.svg';
import SlideThree from '../../../assets/slide_three.svg';

const Slider = ({item}) => {
  var slider =
    item.key === '1' ? (
      <SlideOne />
    ) : item.key === '2' ? (
      <SlideTwo />
    ) : (
      <SlideThree />
    );
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
      {slider}
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
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    textAlign: 'center',
    padding: 30,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 42,
    color: '#334357',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Slider;
