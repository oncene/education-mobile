import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Appbar,
  Colors,
  Card,
  Title,
  Subheading,
  Button,
} from 'react-native-paper';
import {useTheme, DarkTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ConferenceCard = () => {
  const {colors} = useTheme();
  return (
    <Card style={{margin: 9}}>
      <Card.Actions style={{margin: 9}}>
        <MaterialCommunityIcons name="office-building" size={30} />
        <Card.Content style={{width: '70%'}}>
          <Title>Arm Bone Part</Title>
        </Card.Content>

        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Join
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ConferenceCard;

const styles = StyleSheet.create({});
