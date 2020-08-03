import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import CustomHeader from '../components/CustomHeader';
import Points from '../components/Points';
import Performance from '../components/Performance';
import Table from '../components/Table';

const DashboardScreen = () => {
  return (
    <Container style={styles.container}>
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
