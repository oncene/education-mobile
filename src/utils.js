import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
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
    bgcolor:'#fff'
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 2,
  mode: "exact",

  colors: {
    ...DarkTheme.colors,
    primary: 'black',
    accent: '#d3d3d3',
    text: '#d3d3d3',
    blue: '#ffffff',
    bgcolor:'#black'

 
  },
};




export const getData = async () => {
  console.log('sambhar');
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
