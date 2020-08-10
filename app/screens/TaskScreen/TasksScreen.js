import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';

import Header from '../../layout/header/Header';

const TasksScreen = () => {
  return (
    <Container style={styles.container}>
      <Header title={'Tasks'} />
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
