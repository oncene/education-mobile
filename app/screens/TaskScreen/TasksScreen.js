import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import I18n from '../../language/index';
import Header from '../../layout/header/Header';

const TasksScreen = () => {
  return (
    <Container style={styles.container}>
      <Header title={I18n.t('Tasks.header')} />
      <Text>Tasks screen</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TasksScreen;
