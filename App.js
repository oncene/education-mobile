import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from './app/screens/DashboardScreen';
import TasksScreen from './app/screens/TasksScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';

const MainFlow = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          const iconColor = focused ? '#3d76e0' : '#838785';
          return <FontAwesome name="dashboard" size={34} color={iconColor} />;
        },
      },
    },
    Tasks: {
      screen: TasksScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          const iconColor = focused ? '#3d76e0' : '#838785';
          return <FontAwesome name="tasks" size={34} color={iconColor} />;
        },
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          const iconColor = focused ? '#3d76e0' : '#838785';
          return <FontAwesome name="calendar" size={34} color={iconColor} />;
        },
      },
    },
    Messaging: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          const iconColor = focused ? '#3d76e0' : '#838785';
          return <FontAwesome name="wechat" size={34} color={iconColor} />;
        },
      },
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          const iconColor = focused ? '#3d76e0' : '#838785';
          return (
            <MaterialIcons name="notifications" size={34} color={iconColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: '#3d76e0', // active icon color
      inactiveTintColor: '#000', // inactive icon color
      style: {
        height: 70,
        marginBottom: 10,
        backgroundColor: '#fff', // TabBar background
        color: '#3d76e0',
      },
    },
  },
);

const App = createAppContainer(MainFlow);

export default () => {
  return <App />;
};
