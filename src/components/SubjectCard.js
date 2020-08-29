import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SubjectCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        borderTopLeftRadius={21}
        style={styles.image}
        source={{uri: 'https://picsum.photos/700'}}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,

    borderRadius: 21,
  },
  image: {
    width: windowWidth / 2 - 20,
    borderRadius: 15,
    height: 100,
  },
  card: {
    borderRadius: 21,
  },
});
