import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import CustomHeader from '../../layout/header/CustomHeader';
import Points from './components/Points';
import Performance from './components/Performance';
import Table from './components/Table';

import {Context as ThemeContext} from '../../context/ThemeContext';

const DashboardScreen = () => {
  const {state, toggleTheme} = useContext(ThemeContext);

  const getTheme = async () => {
    await AsyncStorage.getItem('theme', (err, value) => {
      if (err) {
        console.log(err);
      } else {
        const new_theme_data = JSON.parse(value);
        if (new_theme_data != null) {
          if (new_theme_data.theme === 'dark') {
            toggleTheme(false);
          } else {
            toggleTheme(true);
          }
        } else {
          null;
        }
      }
    });
  };

  //setting theme in async storage
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <Container style={[styles.container, {backgroundColor: state.colors.base}]}>
      <CustomHeader />
      <View style={styles.chartsSection}>
        <Points />
        <Performance />
      </View>
      <Table />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartsSection: {
    flexDirection: 'row',
  },
});

export default DashboardScreen;
