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
import { useNavigation } from '@react-navigation/native';

const Forgot = () => {
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
          <Text style={styles.create}>Reset Password</Text>
          <IconButton
            style={{}}
            icon="close"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={{height: 21}} />
        <Paragraph style={{margin: 24, textAlign: 'center'}}>
          Enter your registered email below to recieve password reset
          instruction
        </Paragraph>
        <Image
          style={styles.Image}
          source={require('../../../assets/reset_pswd.png')}
        />
        <Input
          mode="outlined"
          placeholder="Email"
          value={username}
          ontext={setUsername}
          keyboard="email-address"
        />

        <View style={{height: 21}} />

        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          color={colors.primary}
          style={styles.Button}
          onPress={()=>navigation.navigate('OtpPassword')}>
          send Email
        </Button>
        <View style={{height: 21}} />


      </ScrollView>
    </View>
  );
};

export default Forgot;

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
});
