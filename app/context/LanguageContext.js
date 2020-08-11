import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './CreateDataContext';
import {navigate} from '../navigationRef';
import {Language} from '../language/index';

const languageReducer = (state, action) => {
  switch (action.type) {
    case 'change_language':
      return {language: action.payload.language};
    default:
      return state;
  }
};

const changeTheme = (dispatch) => async (language) => {
  try {
    if (!language) {
      dispatch({
        type: 'change_language',
        payload: Language.spanish,
      });
      await AsyncStorage.setItem('language', JSON.stringify(Language.spanish));
    } else if (themeType) {
      dispatch({
        type: 'change_language',
        payload: Language.english,
      });
      await AsyncStorage.setItem('language', JSON.stringify(Language.english));
    }
  } catch (err) {
    console.log(err);
    // send confirmation message to user
  }
};

export const {Provider, Context} = createDataContext(
  LanguageReducer,
  {changeTheme},
  Language.english,
);
