import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Switch,
} from 'native-base';

import Header from '../../layout/header/Header';
import {Context as ThemeContext} from '../../context/ThemeContext';

const SettingScreen = () => {
  const {state, toggleTheme} = useContext(ThemeContext);
  const isEnabled = state.theme === 'dark' ? true : false;
  return (
    <Container style={[styles.container, {backgroundColor: state.colors.base}]}>
      <Header title={'Settings'} />
      <Content>
        <ListItem
          icon
          style={[styles.listItem, {backgroundColor: state.colors.pri_accent}]}>
          <Left style={{marginLeft: 10}}>
            <Button style={{backgroundColor: state.colors.pri_accent}}>
              <Icon name="color-palette" />
            </Button>
          </Left>
          <Body style={{borderBottomWidth: 0}}>
            <Text style={styles.settingTitle}>Dark Mode</Text>
          </Body>
          <Right style={{borderBottomWidth: 0}}>
            <Switch
              trackColor={{
                false: '#FFFFFF',
                true: '#FFFFFF',
              }}
              thumbColor={isEnabled ? state.colors.active : state.colors.active}
              onValueChange={() => toggleTheme(isEnabled ? true : false)}
              value={isEnabled}
            />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    margin: 5,
    marginLeft: 5,
    borderRadius: 15,
  },
  settingTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#fff',
  },
});

export default SettingScreen;
