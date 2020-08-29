import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import {modalusernameState, modalpasswordState, modaltState} from './Atom';
import auth from '@react-native-firebase/auth';

export const useLogin = () => {
  const [log, setlog] = useRecoilState(modalusernameState);
  const [pass, setpass] = useRecoilState(modalpasswordState);
  const [pass1, setpass1] = useRecoilState(modaltState);

  return (e, t) => {
    console.log(e);
    console.log(t);
    auth()
      .createUserWithEmailAndPassword(e, t)
      .then((l) => {
        console.log('User account created & signed in!');
        console.log(l.uid);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};
