import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
//import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {StackRoutes, TabBarRoutes} from './Routes';
import TabBarComponent from './TabBarComponent';
import getSlideFromRightTransitionConfig from './Transition';

const AuthStack = createStackNavigator(
  {
    LoginScreen: {
      screen: StackRoutes.LoginScreen,
    },
    RegisterScreen: {
      screen: StackRoutes.RegisterScreen,
    },
    EmailConfirmationScreen: {
      screen: StackRoutes.EmailConfirmationScreen,
    },
    ResetPasswordScreen: {
      screen: StackRoutes.ResetPasswordScreen,
    },
    ResetPasswordOTP: {
      screen: StackRoutes.ResetPasswordOTP,
    },
    NewPasswordScreen: {
      screen: StackRoutes.NewPasswordScreen,
    },
  },
  {headerMode: 'none'},
);

const AppStack = createBottomTabNavigator(
  {
    DashboardScreen: {
      screen: TabBarRoutes.DashboardScreen,
    },
    TasksScreen: {
      screen: TabBarRoutes.TasksScreen,
    },
    CalendarScreen: {
      screen: TabBarRoutes.CalendarScreen,
    },
    MessagesScreen: {
      screen: TabBarRoutes.MessagesScreen,
    },
    NotificationsScreen: {
      screen: TabBarRoutes.NotificationsScreen,
    },
    SettingScreen: {
      screen: TabBarRoutes.SettingScreen,
    },
  },
  {
    lazy: true,
    tabBarOptions: {
      showLabel: true,
    },
    tabBarComponent: (props) => <TabBarComponent {...props} />,
    transitionConfig:
      Platform.OS === 'ios' ? undefined : getSlideFromRightTransitionConfig,
  },
);

/* const AppStack = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
    },
    MessageScreen: {
      screen: StackRoutes.MessageScreen,
    },
    ConversationScreen: {
      screen: StackRoutes.ConversationScreen,
    },
    ProfileViewScreen: {
      screen: StackRoutes.ProfileViewScreen,
    },
    PostViewScreen: {
      screen: StackRoutes.PostViewScreen,
    },
  },
  {
    headerMode: 'none',
    transitionConfig:
      Platform.OS === 'ios' ? undefined : getSlideFromRightTransitionConfig,
  },
); */

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppNavigator = createAppContainer(SwitchNavigator);

export default AppNavigator;
