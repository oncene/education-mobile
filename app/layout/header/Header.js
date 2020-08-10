import React, {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Header as BHeader, Body, Title} from 'native-base';
import {Context as ThemeContext} from '../../context/ThemeContext';

const Header = ({title}) => {
  const {state} = useContext(ThemeContext);
  return (
    <BHeader
      style={[styles.header, {backgroundColor: state.colors.base}]}
      androidStatusBarColor={state.colors.pri_accent}>
      <BHeader
        style={[styles.headView, {backgroundColor: state.colors.pri_accent}]}
        androidStatusBarColor={state.colors.pri_accent}>
        <Body style={styles.headBody}>
          <Title style={[styles.headText, {color: state.colors.head_text}]}>
            {title}
          </Title>
        </Body>
      </BHeader>
    </BHeader>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    overflow: 'hidden',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headView: {
    height: 80,
    width: Dimensions.get('window').width,
  },
  headBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
});

export default Header;
