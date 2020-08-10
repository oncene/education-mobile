import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from 'native-base';

import Header from '../../layout/header/Header';
import {Context as ThemeContext} from '../../context/ThemeContext';

const CalendarScreen = () => {
  const {state} = useContext(ThemeContext);
  return (
    <Container style={[styles.container, {backgroundColor: state.colors.base}]}>
      <Header title={'Calendar'} />
      <Text>Calendar Screen!</Text>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CalendarScreen;
