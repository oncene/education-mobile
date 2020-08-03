import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
} from 'native-base';

const CustomHeader = () => {
  return (
    <Header style={styles.header} androidStatusBarColor="#3d76e0">
      <Header style={styles.headView} androidStatusBarColor="#3d76e0">
        <Left style={{flex: 1}}>
          <Button transparent>
            <Icon name="arrow-back" style={{fontSize: 34}} />
          </Button>
        </Left>
        <Body style={styles.headBody}>
          <Title style={styles.headText}>Ratings</Title>
        </Body>
        <Right style={{flex: 1}}>
          <Button transparent>
            <Icon name="menu" style={{fontSize: 34}} />
          </Button>
        </Right>
      </Header>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headView: {
    height: 80,
    backgroundColor: '#3d76e0',
    width: Dimensions.get('window').width,
  },
  headBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CustomHeader;
