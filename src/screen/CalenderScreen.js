import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderComponents from '../components/HeaderComponents';
import {CalendarStrip} from 'react-native-calendar-strip';
import moment from 'moment'

const CalenderScreen = () => {
    datesWhitelist = [
        // single date (today)
        moment(),
    
        // date range
        {
          start:   moment(),
          end:  moment()
        }
      ];

  return (
    <View>
      <HeaderComponents title="Calender Screen" />
      <CalendarStrip   />
    </View>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({});
