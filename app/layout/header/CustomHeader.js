import React, {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {Context as ThemeContext} from '../../context/ThemeContext';

const CustomHeader = () => {
  const {state} = useContext(ThemeContext);
  return (
    <Header
      style={[styles.header, {backgroundColor: state.colors.base}]}
      androidStatusBarColor={state.colors.pri_accent}>
      <Header
        style={[styles.headView, {backgroundColor: state.colors.pri_accent}]}
        androidStatusBarColor={state.colors.pri_accent}>
        <Left style={{flex: 1}}>
          <Button transparent>
            <Icon
              name="arrow-back"
              style={{fontSize: 34, color: state.colors.head_text}}
            />
          </Button>
        </Left>
        <Body style={styles.headBody}>
          <Title style={[styles.headText, {color: state.colors.head_text}]}>
            Ratings
          </Title>
        </Body>
        <Right style={{flex: 1}}>
          <Button transparent>
            <Icon
              name="menu"
              style={{fontSize: 34, color: state.colors.head_text}}
            />
          </Button>
        </Right>
      </Header>
    </Header>
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

export default CustomHeader;
