import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useLogin} from '../../store/Hooks';
import {useTheme, DarkTheme} from 'react-native-paper';
import {Button, IconButton} from 'react-native-paper';
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
const SignIn = () => {
  const navigation = useNavigation();

  const {colors} = useTheme();
  const login = useLogin();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

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
          <Text style={styles.create}>Log in</Text>
          <IconButton
            style={{}}
            icon="close"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <View style={{height: 21}} />
        <TouchableOpacity
          onPress={() =>
            onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook!'),
            )
          }>
          <Image
            style={styles.logoFacebook}
            source={require('../../../assets/button_facebook_login.png')}
          />
        </TouchableOpacity>

        <View style={{height: 21}} />
        <TouchableOpacity
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <View style={styles.viewImage}>
            <Image
              style={styles.logoFacebook1}
              source={require('../../../assets/google_sign_up.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={{height: 51}} />

        <Input
          mode="outlined"
          placeholder="username"
          value={username}
          ontext={setUsername}
          keyboard="email-address"
        />
        <Input
          mode="outlined"
          placeholder="password"
          value={password}
          ontext={setPassword}
        />
        <View style={{height: 30}} />

        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          color={colors.primary}
          style={styles.Button}
          onPress={() => login(username, password)}>
          Sign in
        </Button>
        <View style={{height: 21}} />
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.forgot}>Forgot your Password?</Text>
          <View style={{height: 9}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.create}>Don't have an account?</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignIn;

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
    fontSize: 18,
    alignSelf: 'center',
  },
  logoFacebook: {
    width: '62%',
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
  signin: {
    alignSelf: 'center',
    margin: 9,
  },
  viewImage: {
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginRight: 21,
    fontWeight: '700',
    fontSize: 18,
  },
});
