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

const Reset = () => {
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
          <Text style={styles.create}>New Password</Text>
          <IconButton
            style={{}}
            icon="close"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={{height: 21}} />
        <Paragraph style={{margin: 24, textAlign: 'center'}}>
          Change new Password, you can access with your new password
        </Paragraph>
        <Image
          style={styles.Image}
          source={require('../../../assets/new_pswd.png')}
        />
        <View style={{marginTop: -31}}>
          <Input
            mode="outlined"
            placeholder="Password"
            value={username}
            ontext={setUsername}
            keyboard="email-address"
          />
          <Input
            mode="outlined"
            placeholder="Confirm Password"
            value={username}
            ontext={setUsername}
            keyboard="email-address"
          />
        </View>
        <View style={{height: 21}} />

        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          color={colors.primary}
          style={styles.Button}
          onPress={() => navigation.navigate('SignIn')}>
          New Password
        </Button>
        <View style={{height: 21}} />
      </ScrollView>
    </View>
  );
};

export default Reset;

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
