import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Intro = () => {
  const slides = [
    {
      key: 'one',
      title: 'Welcome!',
      text: 'Description.\nSay something cool',
      image: require('../../../assets/slide_one.png'),
      backgroundColor: '#fff',
    },
    {
      key: 'two',
      title: 'Find your Friend',
      text: 'Other cool stuff',
      image: require('../../../assets/slide_two.png'),

      backgroundColor: '#fff',
    },
    {
      key: 'three',
      title: 'learn with best',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../../../assets/slide_three.png'),

      backgroundColor: '#fff',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 42}} />
      <FlatList
        horizontal
        data={slides}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              backgroundColor: item.backgroundColor,
              height: windowHeight,
              width: windowWidth,
            }}>
            <Image style={styles.image} source={item.image} />
            <View style={{height: 21}} />
            <Text
              style={{alignSelf: 'center', fontSize: 36, fontWeight: 'bold'}}>
             {item.title}
            </Text>
            <Paragraph style={{marginLeft: 21, marginRight: 21}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Paragraph>
          </View>
        )}
      />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  image: {
    height: '50%',
    width: '70%',
    alignSelf: 'center',
  },
});
