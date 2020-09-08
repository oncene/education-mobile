import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Button} from 'react-native-paper';
import SubjectCard from '../../components/SubjectCard';
import GroupCard from '../../components/GroupCard';
import ConferenceCard from '../../components/ConferenceCard';
import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const SubjectScreen = () => {
  const [data1, setdata1] = useState(null);
  const navigation = useNavigation();
  const subject = [
    {
      id: 1,
      img: 'https://scx2.b-cdn.net/gfx/news/hires/2019/physics.jpg',
      subject: 'Physics',
      details: 'Lorem ipsum dolor sit amet.ipsum dolor sit amet ',
    },
    {
      id: 2,
      img:
        'https://images.theconversation.com/files/274417/original/file-20190514-60529-ktb5t3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      subject: 'Maths',
      details: 'Lorem ipsum dolor sit ametipsum dolor sit amet',
    },
    {
      id: 3,
      img:
        'https://m.jagranjosh.com/imported/images/E/Articles/English%20class%2010%20all%20chapters.jpg',
      subject: 'english',
      details: 'Lorem ipsum dolor sit ametipsum dolor sit amet.',
    },
  ];

  const fetchData = async () => {
    const usersCollection = await firestore().collection(
      'school',
      'array-contains',
    );
    await usersCollection.get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.id, doc);
        setdata1(doc.data());
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView>
      <View style={styles.view}>
        <FlatList
          numColumns={2}
          keyExtractor={(i) => i.id}
          data={subject}
          renderItem={({item, index}) => (
            <View key={index} style={{width: '50%', alignSelf: 'center',marginTop:12, borderRadius:9, }}>
              <Card
              
                onPress={() => navigation.navigate('GroupScreen')}
                style={{width:'90%', alignSelf:'center'}}>
                <Card.Cover
                  style={{height:101, borderRadius:9}}
                  source={{uri: item.img}}
                />
                <Title style={{marginLeft:9}}> {item.subject} </Title>
                <Paragraph style={{marginLeft:9}}>{item.details} </Paragraph>
              </Card>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 9,
  },
});
