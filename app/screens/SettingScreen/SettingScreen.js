import React, {useContext, useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import I18n from '../../language/index';
import AsyncStorage from '@react-native-community/async-storage';
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
import RNRestart from 'react-native-restart';
import Header from '../../layout/header/Header';
import {Context as ThemeContext} from '../../context/ThemeContext';
import {Picker} from '@react-native-community/picker';

const listLanguage = [
  {key: 'en', label: 'English(default)'},
  {key: 'es', label: 'Spanish'},
];

const SettingScreen = () => {
  const [language, setLanguage] = useState('en');
  const {state, toggleTheme} = useContext(ThemeContext);
  const isEnabled = state.theme === 'dark' ? true : false;

  const _onChangeLanguage = async (languageSelected) => {
    await AsyncStorage.setItem('USER_LANGUAGE', languageSelected);
    I18n.locale = languageSelected;
    RNRestart.Restart();
  };

  useEffect(() => {
    _getUserLanguage();
  }, []);

  const _getUserLanguage = async () => {
    let languageCode = await AsyncStorage.getItem('USER_LANGUAGE');
    if (!languageCode) {
      languageCode = 'en';
    }
    setLanguage(languageCode);
  };

  return (
    <Container style={[styles.container, {backgroundColor: state.colors.base}]}>
      <Header title={I18n.t('Settings.header')} />
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
            <Text style={styles.settingTitle}>
              {I18n.t('Settings.dark_mode')}
            </Text>
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
        <ListItem
          icon
          style={[styles.listItem, {backgroundColor: state.colors.pri_accent}]}>
          <Left style={{marginLeft: 10}}>
            <Button style={{backgroundColor: state.colors.pri_accent}}>
              <Icon name="language" />
            </Button>
          </Left>
          <Body style={{borderBottomWidth: 0}}>
            <Text style={styles.settingTitle}>
              {I18n.t('Settings.language')}
            </Text>
          </Body>
          <Picker
            mode="dropdown"
            style={{width: 10, color: '#FFFFFF'}}
            selectedValue={language}
            onValueChange={_onChangeLanguage.bind(this)}>
            {listLanguage.map((languageItem, i) => {
              return (
                <Picker.Item
                  key={i}
                  value={languageItem.key}
                  label={languageItem.label}
                />
              );
            })}
          </Picker>
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
