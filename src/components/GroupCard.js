import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import {useTheme, DarkTheme, IconButton, Colors} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const GroupCard = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <Card style={{backgroundColor: colors.accent, margin: 15}} onPress={()=>navigation.navigate('ColabrationScreen')} >
      <Card.Actions>
        <Image
          source={require('../../assets/discussion.png')}
          style={{
            height: 30,
            width: 30,
            alignSelf: 'flex-start',
            marginTop: 12,
          }}
        />
        <View
          style={{
            width: '69%',
            alignSelf: 'flex-start',
            marginLeft: 21,
            marginTop: 9,
          }}>
          <Text style={{fontSize: 12, fontWeight: '700'}}>
            Group Los Pandejos
          </Text>
          <Text style={{fontSize: 9}}>3 Month Ago</Text>
          <Text
            style={{
              fontSize: 9,
              backgroundColor: colors.blue,
              alignSelf: 'flex-start',
              color: colors.accent,
            }}>
            ACCEPTED
          </Text>
        </View>

        <Image
          source={require('../../assets/crown.png')}
          style={{height: 32, width: 32, alignSelf: 'flex-start'}}
        />
      </Card.Actions>
      <Card.Actions>
        <Avatar.Image
          style={{borderWidth: 2, borderColor: 'white'}}
          size={36}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          }}
        />

        <Avatar.Image
          style={{marginLeft: -19, borderWidth: 3, borderColor: 'white'}}
          size={36}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          }}
        />
        <Avatar.Image
          style={{marginLeft: -19, borderWidth: 3, borderColor: 'white'}}
          size={36}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          }}
        />
        <Avatar.Image
          style={{marginLeft: -19, borderWidth: 3, borderColor: 'white'}}
          size={36}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          }}
        />
        <Subheading> 4 Persons</Subheading>
      </Card.Actions>

      <Card.Actions>
        <IconButton
          icon="heart-outline"
          color={Colors.grey700}
          size={30}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="message-reply-text"
          color={Colors.grey700}
          size={30}
          onPress={() => console.log('Pressed')}
        />
        <Text> 1</Text>
      </Card.Actions>
    </Card>
  );
};

export default GroupCard;

const styles = StyleSheet.create({});
