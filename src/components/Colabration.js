import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Avatar, Title, Subheading, useTheme, Paragraph, IconButton, Colors} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Colabration = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <Card style={{margin: 9}}  >
      <Card.Actions>
        <Avatar.Image
          size={36}
          source={{
            uri:
              'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2NDE4MzExNjkx/jackie-chan-9542080-1-402.jpg',
          }}
        />
        <Card.Content>
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
        </Card.Content>
        
      </Card.Actions>
      <Card.Content>
          <Title style={{ }}>
            Group Los Pandejos
          </Title>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </Paragraph>
        </Card.Content>
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

export default Colabration;

const styles = StyleSheet.create({});
