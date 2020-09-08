import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/slide_one.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/slide_two.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../../assets/slide_three.png'),
    backgroundColor: '#22bcb5',
  },
];

const Task = () => {
  const [showRealApp, setshowRealApp] = useState(true);
  const navigation = useNavigation();

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setshowRealApp(true);
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={{height: 21}} />

      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('Intro')}>
        Intro Slider
      </Button>
      <View style={{height: 21}} />
      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('Find')}>
        Find your School
      </Button>
      <View style={{height: 21}} />
      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('OtpPassword')}>
        Confirm Your Mail
      </Button>
      <View style={{height: 21}} />
      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('Reset')}>
        New Password
      </Button>
      <View style={{height: 21}} />
      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('Forgot')}>
        Forgot Password
      </Button>
      <View style={{height: 21}} />

      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('ColabrationScreen')}>
        ColabrationScreen
      </Button>
      <View style={{height: 21}} />

      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('GroupScreen')}>
        GroupScreen
      </Button>
      <View style={{height: 21}} />

      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('TeacherScreen')}>
        Teacher Card
      </Button>

      <View style={{height: 21}} />

      <Button
        labelStyle={styles.text}
        mode="contained"
        style={styles.Button}
        onPress={() => navigation.navigate('CalenderScreen')}>
        CalenderScreen
      </Button>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  Button: {
    width: '60%',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
  },
});
