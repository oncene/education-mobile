import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Colors} from 'react-native-paper';
import {useTheme , DarkTheme} from 'react-native-paper';
const HeaderComponents = (props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const {colors} = useTheme();
  return (
    <Appbar.Header dark={true} style={{elevation:0}} >
      <Appbar.Action icon={props.left} onPress={_goBack} />
      <Appbar.Content 
        titleStyle={{alignSelf: 'center'}}
        color={colors.accent}
        title={props.title}
      />
      <Appbar.Action icon={props.right} onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default HeaderComponents;

const styles = StyleSheet.create({});
