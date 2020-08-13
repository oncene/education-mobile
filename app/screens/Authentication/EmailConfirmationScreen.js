import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Container, Content, Button, Icon} from 'native-base';
import {Context as ThemeContext} from '../../context/ThemeContext';
import ConfirmEmail from '../../../assets/confirm_email.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const EmailConfirmationScreen = ({navigation}) => {
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
            Confirm your email
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
          We send you an email to confirm your account, it it stil has not
          reached you, request a new email.
        </Text>

        <ConfirmEmail />
        <OTPInputView
          style={{width: '80%', height: 50, alignSelf: 'center'}}
          pinCount={5}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 15,
              color: colors.text01,
              textAlign: 'right',
              textDecorationLine: 'underline',
              marginTop: 5,
            }}>
            Request new email
          </Text>
        </TouchableOpacity>

        <Button
          onPress={() => navigation.navigate('App')}
          block
          style={[
            styles.loginBtn,
            {backgroundColor: colors.pri_accent, color: colors.header},
          ]}>
          <Text style={[styles.text, {color: colors.head_text}]}>
            Confirm email
          </Text>
        </Button>

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

  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },

  loginBtn: {
    height: 70,
    borderRadius: 10,
    marginVertical: 10,
  },

  underlineStyleBase: {
    width: 44,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#F1F2F3',
    borderRadius: 10,
    borderStyle: 'solid',
    color: '#334357',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default EmailConfirmationScreen;
