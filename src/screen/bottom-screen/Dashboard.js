import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderComponents from '../../components/HeaderComponents';
import {Colors} from 'react-native-paper';
import HomeTab from '../../components/HomeTab';
import SubjectCard from '../../components/SubjectCard';

const Dashboard = () => {
  return (
    <View style={styles.view}>
      <HeaderComponents title="Dashboard" />
      <HomeTab />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
