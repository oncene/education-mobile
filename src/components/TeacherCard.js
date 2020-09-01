import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Card,
  Avatar,
  Paragraph,
  Subheading,
  Headline,
  Title,
  IconButton,
  Colors,
} from 'react-native-paper';

const TeacherCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Actions>
        <Avatar.Image
          size={51}
          source={{
            uri:
              'https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png',
          }}
        />
        <Card.Content>
          <Subheading
            style={{marginBottom: -9, fontWeight: 'bold', fontSize: 15}}>
            talliya nella vera
          </Subheading>
          <Paragraph style={{marginBottom: -5, fontSize: 12}}>
            10 minutes ago{' '}
          </Paragraph>
          <Paragraph
            style={{
              backgroundColor: 'red',
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              fontSize: 12,
            }}>
            {' '}
            TEACHER{' '}
          </Paragraph>
        </Card.Content>
      </Card.Actions>
      <Card.Content>
        <Title style={{fontSize: 18}}>Second Part Activity</Title>
        <Paragraph style={{fontSize: 12}}>
          Lorem ipsum lorem ipsum Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </Paragraph>
        <Card.Actions style={{margin: -15}}>
          <IconButton
            icon="heart-outline"
            color={Colors.grey700}
            size={24}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="message-reply-text"
            color={Colors.grey700}
            size={24}
            onPress={() => console.log('Pressed')}
          />
          <Text> 1</Text>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default TeacherCard;

const styles = StyleSheet.create({
  card: {
    margin: 9,
  },
});
