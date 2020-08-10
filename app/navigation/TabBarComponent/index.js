import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TabIcon from './TabIcon';
import {TabBarRoutes} from '../Routes';

import {Context as ThemeContext} from '../../context/ThemeContext';

const TabBarComponent = ({navigation, ...data}) => {
  const {state} = useContext(ThemeContext);
  const currentRouteName = navigation.state.routes[navigation.state.index].key;

  return (
    <View style={[styles.container, {backgroundColor: state.colors.base}]}>
      {Object.keys(TabBarRoutes).map((key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.95}
          style={key === 'SettingScreen' ? styles.icon_setting : styles.icon}
          onPress={() => navigation.navigate(key)}>
          <TabIcon route={key} isActive={currentRouteName === key} />
          {key != 'SettingScreen' ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 12,
                color:
                  currentRouteName === key
                    ? state.colors.active
                    : state.colors.sec_accent,
              }}>
              {key.split(/(?=[A-Z])/)[0]}
            </Text>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_settings: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default TabBarComponent;
