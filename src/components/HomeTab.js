import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTheme, DarkTheme} from 'react-native-paper';
import Subject from '../screen/dashboard/Subject';
import PostSubject from '../screen/dashboard/PostSubject';

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};
const HomeTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Subjects'},
    {key: 'second', title: 'Post Subjects'},
  ]);
  const {colors} = useTheme();

  const renderTabBar = (props) => (
    <TabBar
      getLabelText={({route}) => (
        <View>
          <Text style={{color: colors.accent}}> {route.title} </Text>
        </View>
      )}
      {...props}
      indicatorContainerStyle={{marginLeft: 51}}
      indicatorStyle={{backgroundColor: 'white', width: '21%'}}
      style={{
        backgroundColor: colors.primary,
        borderBottomEndRadius: 21,
        borderBottomLeftRadius: 21,
        elevation: 0,
      }}
    />
  );

  const renderScene = SceneMap({
    first: Subject,
    second: PostSubject,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
