import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useTheme, DarkTheme} from 'react-native-paper';
const Input = (props) => {
  const {colors} = useTheme();
  return (
    <TextInput
      mode={props.mode}
      style={{backgroundColor: colors.accent, marginLeft: 51, marginRight: 51}}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.ontext}
      keyboardType={props.keyboard}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
