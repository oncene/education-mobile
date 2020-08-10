import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './CreateDataContext';
import {navigate} from '../navigationRef';
import {Theme} from '../theme/index';

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle_theme':
      return {theme: action.payload.theme, colors: action.payload.colors};
    default:
      return state;
  }
};

const toggleTheme = (dispatch) => async (themeType) => {
  try {
    console.log('toggle function called');
    if (!themeType) {
      console.log('theme set to dark');
      dispatch({
        type: 'toggle_theme',
        payload: Theme.dark,
      });
      await AsyncStorage.setItem('theme', JSON.stringify(Theme.dark));
    } else if (themeType) {
      console.log('theme set to light');
      dispatch({
        type: 'toggle_theme',
        payload: Theme.light,
      });
      await AsyncStorage.setItem('theme', JSON.stringify(Theme.light));
    }
  } catch (err) {
    console.log(err);
    // send confirmation message to user
  }
};

export const {Provider, Context} = createDataContext(
  themeReducer,
  {toggleTheme},
  Theme.light,
);
