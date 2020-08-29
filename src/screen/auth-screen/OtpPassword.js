import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  useTheme,
  DarkTheme,
  Button,
  IconButton,
  Paragraph,
} from 'react-native-paper';
import Input from '../../components/Input';
import {useLogin} from '../../store/Hooks';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpPassword = () => {
  const login = useLogin();
  const {colors} = useTheme();
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  async function onGoogleButtonPress() {
    GoogleSignin.configure({
      webClientId:
        '751601510102-1jkmca1r6ubfsmgmg787ec7jgoee93ro.apps.googleusercontent.com',
    });
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={{height: 21}} />

        <View style={styles.row}>
          <Text style={styles.create}>Confirm Your Mail</Text>
          <IconButton
            style={{}}
            icon="close"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={{height: 21}} />
        <Paragraph style={{margin: 24, textAlign: 'center'}}>
          Please check your inbox and copy code recieved to reset a password
        </Paragraph>
        <Image
          style={styles.Image}
          source={require('../../../assets/confirm_email.png')}
        />

        <View style={{height: 21}} />
        <OTPInputView
          style={{width: '60%', height: 72, alignSelf: 'center'}}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          color={colors.primary}
          style={styles.Button}
          onPress={() => navigation.navigate('Reset')}>
          New Password
        </Button>
        <View style={{height: 21}} />
      </ScrollView>
    </View>
  );
};

export default OtpPassword;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  create: {
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
  },
  logoFacebook: {
    width: '72%',
    height: 45,
    alignSelf: 'center',
  },
  logoFacebook1: {
    width: '76%',
    height: 40,
    alignSelf: 'center',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '72%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 3,
    color: 'grey',
  },
  para: {
    marginLeft: 51,
    marginRight: 21,
    textAlign: 'center',
  },
  Image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  underlineStyleBase: {},
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
    backgroundColor: 'red',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
    
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  underlineStyleBase: {
  
    backgroundColor: 'grey',
  },
});
