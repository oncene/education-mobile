import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4D86F4',
    accent: '#ffffff',
    text: '#334357',
    blue: '#38A9FF',
  },
};

export const getData = async () => {
  console.log('sambhar')
  try {
    const value = await AsyncStorage.getItem('auth');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
    return e;
  }
};
