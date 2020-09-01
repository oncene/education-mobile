import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderComponents from '../components/HeaderComponents';
import TeacherCard from '../components/TeacherCard';
import {ScrollView} from 'react-native-gesture-handler';

const TeacherScreen = () => {
  return (
    <ScrollView>
      <View>
        <HeaderComponents title="Teacher Screen" />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </View>
    </ScrollView>
  );
};

export default TeacherScreen;

const styles = StyleSheet.create({});
