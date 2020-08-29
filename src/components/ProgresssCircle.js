import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {useTheme, DarkTheme} from 'react-native-paper';

const ProgresssCircle = () => {
    const {colors} = useTheme();
  return (
    <ProgressCircle
      percent={69}
      radius={50}
      borderWidth={8}
      color={colors.primary}
      shadowColor="#999"
      bgColor="#fff">
      <Text style={{fontSize: 18}}>{'69%'}</Text>
      <Text>Points</Text>
    </ProgressCircle>
  );
};

export default ProgresssCircle;

const styles = StyleSheet.create({});
