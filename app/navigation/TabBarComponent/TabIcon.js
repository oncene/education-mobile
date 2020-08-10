import React, {useContext} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Typography} from '../../theme/index';
import {Context as ThemeContext} from '../../context/ThemeContext';

const TabIcon = ({route, isActive}) => {
  const {state} = useContext(ThemeContext);
  switch (route) {
    case 'DashboardScreen':
      return (
        <FontAwesome
          name="dashboard"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
        />
      );

    case 'TasksScreen':
      return (
        <FontAwesome
          name="tasks"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
        />
      );

    case 'CalendarScreen':
      return (
        <FontAwesome
          name="calendar"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
        />
      );

    case 'MessagesScreen':
      return (
        <FontAwesome
          name="wechat"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
        />
      );

    case 'NotificationsScreen':
      return (
        <MaterialIcons
          name="notifications"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
        />
      );
    case 'SettingScreen':
      return (
        <MaterialIcons
          name="more-vert"
          color={isActive ? state.colors.active : state.colors.sec_accent}
          size={Typography.IconSizes.x8}
          style={{marginTop: -13}}
        />
      );
    default:
      return null;
  }
};

export default TabIcon;
