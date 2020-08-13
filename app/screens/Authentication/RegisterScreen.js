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
import GoogleSvg from '../../../assets/google.svg';

const RegisterScreen = ({navigation}) => {
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
            Create an account
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

        <Button block style={styles.socialButton}>
          <Icon
            type="FontAwesome"
            name="facebook"
            style={{fontSize: 25, color: colors.pri_accent}}
          />
          <Text style={[styles.text, {color: colors.text01}]}>
            Sign up With Facebook
          </Text>
        </Button>
        <Button block style={styles.socialButton}>
          <GoogleSvg style={{marginRight: 10}} />
          <Text style={[styles.text, {color: colors.text01}]}>
            Sign up With Google
          </Text>
        </Button>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View style={{flex: 1, height: 3, backgroundColor: '#E6ECF5'}} />
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                width: 30,
                textAlign: 'center',
                color: colors.text01,
              }}>
              OR
            </Text>
          </View>
          <View style={{flex: 1, height: 3, backgroundColor: '#E6ECF5'}} />
        </View>
        <Form>
          <Item stackedLabel last style={styles.formElement}>
            <Label style={[styles.textLabel, {color: colors.text01}]}>
              NAMES
            </Label>
            <Input style={[styles.textLabel, {color: colors.text01}]} />
          </Item>
          <Item stackedLabel last style={styles.formElement}>
            <Label style={[styles.textLabel, {color: colors.text01}]}>
              EMAIL
            </Label>
            <Input style={[styles.textLabel, {color: colors.text01}]} />
          </Item>
          <Item stackedLabel last style={styles.formElement}>
            <Label style={[styles.textLabel, {color: colors.text01}]}>
              PASSWORD
            </Label>
            <Input
              style={[styles.textLabel, {color: colors.text01}]}
              secureTextEntry={true}
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
          block
          style={[
            styles.loginBtn,
            {backgroundColor: colors.pri_accent, color: colors.header},
          ]}
          onPress={() => navigation.navigate('EmailConfirmationScreen')}>
          <Text style={[styles.text, {color: colors.head_text}]}>
            Create an account
          </Text>
        </Button>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: colors.text01,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Already registered with us? Sign in
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            color: colors.text01,
            textAlign: 'center',
          }}>
          By signing up you agree to our terms and condition
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

export default RegisterScreen;
