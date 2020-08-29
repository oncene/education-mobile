import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screen/auth-screen/SplashScreen';
import Dashboard from './src/screen/bottom-screen/Dashboard';
import Forgot from './src/screen/auth-screen/Forgot';
import SignIn from './src/screen/auth-screen/SignIn';
import Reset from './src/screen/auth-screen/Reset';
import SignUp from './src/screen/auth-screen/SignUp';
import OtpPassword from './src/screen/auth-screen/OtpPassword';
import SubjectScreen from './src/screen/dashboard/SubjectScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Task from './src/screen/bottom-screen/Task';
import Calender from './src/screen/bottom-screen/Calender';
import Messages from './src/screen/bottom-screen/Messages';
import Notifications from './src/screen/bottom-screen/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GroupScreen from './src/screen/GroupScreen';
import ColabrationScreen from './src/screen/ColabrationScreen';
import auth from '@react-native-firebase/auth';
import Intro from './src/screen/dashboard/Intro'
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {RecoilRoot} from 'recoil';
import {useLogin} from './src/store/Hooks';
import {theme} from './src/utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App({navigation}) {
  const [isLogging, setisLogging] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        setisLogging(true);
      } else {
        // No user is signed in.
        console.log('false');
        setisLogging(false);
      }
    });
  }, []);
  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {isLogging ? (
              <>
                <Stack.Screen name="Dashboard" component={Dashboard1} />
                <Stack.Screen name="SubjectScreen" component={SubjectScreen} />
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="GroupScreen" component={GroupScreen} />
                <Stack.Screen
                  name="ColabrationScreen"
                  component={ColabrationScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OtpPassword" component={OtpPassword} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="Reset" component={Reset} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}

const Dashboard1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
