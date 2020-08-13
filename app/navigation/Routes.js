import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import TasksScreen from '../screens/TaskScreen/TasksScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import MessagesScreen from '../screens/MessageScreen/MessagesScreen';
import NotificationsScreen from '../screens/NotificationScreen/NotificationsScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import RegisterScreen from '../screens/Authentication/RegisterScreen';
import EmailConfirmationScreen from '../screens/Authentication/EmailConfirmationScreen';
import ResetPasswordScreen from '../screens/Authentication/ResetPasswordScreen';
import ResetPasswordOTP from '../screens/Authentication/ResetPasswordOTP';
import NewPasswordScreen from '../screens/Authentication/NewPasswordScreen';

export const TabBarRoutes = {
  DashboardScreen,
  TasksScreen,
  CalendarScreen,
  MessagesScreen,
  NotificationsScreen,
  SettingScreen,
};

export const StackRoutes = {
  LoginScreen,
  RegisterScreen,
  EmailConfirmationScreen,
  ResetPasswordScreen,
  ResetPasswordOTP,
  NewPasswordScreen,
};
