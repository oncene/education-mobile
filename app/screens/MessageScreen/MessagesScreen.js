import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import I18n from '../../language/index';

import Header from '../../layout/header/Header';
import {Context as ThemeContext} from '../../context/ThemeContext';

const MessagesScreen = () => {
  const {state} = useContext(ThemeContext);
  return (
    <Container style={[styles.container, {backgroundColor: state.colors.base}]}>
      <Header title={I18n.t('Messages.header')} />
      <Text>Messages Screen!</Text>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
