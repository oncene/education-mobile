import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

import {Context as ThemeContext} from '../../context/ThemeContext';
import NewPswd from '../../../assets/new_pswd.svg';

const NewPasswordScreen = ({navigation}) => {
  const {
    state: {colors},
  } = useContext(ThemeContext);
  return (
    <Container>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        hidden={false}
        translucent={false}
      />
      <Content
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.base}]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={[
              styles.text,
              {
                color: colors.text01,
                textAlign: 'left',
              },
            ]}>
            New Password
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'flex-end',
              marginLeft: 'auto',
            }}>
            <Icon
              type="FontAwesome"
              name="close"
              style={{
                fontSize: 25,
                color: colors.text01,
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            color: colors.text01,
            textAlign: 'center',
            marginVertical: 20,
          }}>
          Change new password, you can access with the new password
        </Text>
        <NewPswd />
        <Form style={{marginTop: -60}}>
          <Item stackedLabel last style={styles.formElement}>
            <Label style={[styles.textLabel, {color: colors.text01}]}>
              PASSWORD
            </Label>
            <Input
              secureTextEntry={true}
              style={[styles.textLabel, {color: colors.text01}]}
            />
          </Item>
          <Item stackedLabel last style={styles.formElement}>
            <Label style={[styles.textLabel, {color: colors.text01}]}>
              CONFIRM PASSWORD
            </Label>
            <Input
              style={[styles.textLabel, {color: colors.text01}]}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button
          onPress={() => navigation.navigate('App')}
          block
          style={[
            styles.loginBtn,
            {backgroundColor: colors.pri_accent, color: colors.header},
          ]}>
          <Text style={[styles.text, {color: colors.head_text}]}>
            Save Password
          </Text>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: colors.text01,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            color: colors.text01,
            textAlign: 'center',
          }}>
          By signing you agree to our terms and condition
        </Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  socialButton: {
    backgroundColor: '#FEFEFE',
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#E6ECF5',
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  textLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  formElement: {
    backgroundColor: '#F1F2F3',
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#E6ECF5',
    marginVertical: 10,
  },
  loginBtn: {
    height: 70,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default NewPasswordScreen;
