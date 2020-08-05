import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from './app/screens/DashboardScreen';
import TasksScreen from './app/screens/TasksScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';

import AppIntroSlider from 'react-native-app-intro-slider';
import Slider from './app/components/intro/Slider';

const slides = [
  {
    key: '1',
    title: 'Welcome!',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('./assets/slide_one.png'),
    backgroundColor: require('./assets/intro_bg.png'),
  },
  {
    key: '2',
    title: 'Find your friends',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('./assets/slide_two.png'),
    backgroundColor: require('./assets/intro_bg.png'),
  },
  {
    key: '3',
    title: 'Learn with the best',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('./assets/slide_three.png'),
    backgroundColor: require('./assets/intro_bg.png'),
  },
];

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

const styles = StyleSheet.create({
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  const [showRealApp, setShowRealApp] = useState(false);
  _renderItem = ({item}) => {
    return <Slider item={item} />;
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  if (showRealApp) {
    return <App />;
  } else {
    return (
      <AppIntroSlider
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        showSkipButton
        showPrevButton
      />
    );
  }
};
