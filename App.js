import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import AppNavigator from './app/navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider from './app/components/intro/Slider';
import AsyncStorage from '@react-native-community/async-storage';

import {Provider as ThemeProvider} from './app/context/ThemeContext';
import {setNavigator} from './app/navigationRef';

const slides = [
  {
    key: '1',
    title: 'Welcome!',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    key: '2',
    title: 'Find your friends',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    key: '3',
    title: 'Learn with the best',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

const App = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const setAppIntro = async () => {
    await AsyncStorage.setItem('app_intro', JSON.stringify(true));
  };

  const getAppIntroStatus = async () => {
    await AsyncStorage.getItem('app_intro', (err, value) => {
      if (err) {
        console.log(err);
      } else {
        const status = JSON.parse(value);
        if (status != null) {
          setShowRealApp(true);
        } else {
          setShowRealApp(false);
        }
      }
    });
  };

  useEffect(() => {
    getAppIntroStatus();
    setAppIntro();
  }, []);

  _renderItem = ({item}) => {
    return <Slider item={item} />;
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  if (showRealApp) {
    return (
      <ThemeProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </ThemeProvider>
    );
  } else {
    return (
      <AppIntroSlider
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        showSkipButton
        showPrevButton
      />
    );
  }
};
