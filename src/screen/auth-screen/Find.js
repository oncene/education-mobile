import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Paragraph, Button, useTheme} from 'react-native-paper';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import {IconButton, Colors} from 'react-native-paper';

const Find = () => {
  const {colors} = useTheme();
  return (
    <MenuProvider>
      <View style={styles.view}>
        <View style={{height: 51}} />
        <Image
          style={styles.image}
          source={require('../../../assets/find.png')}
        />
        <Text style={{alignSelf: 'center', fontSize: 36, fontWeight: 'bold'}}>
          Find you school
        </Text>
        <View style={{height: 21}} />

        <Paragraph style={{marginLeft: 21, marginRight: 21}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Paragraph>
        <View style={{height: 21}} />

        <Menu>
          <MenuTrigger style={styles.find}>
            <Text style={styles.schooltext}>SCHOOL</Text>
            <View style={{height: 3}} />
            <View style={styles.row}>
              <Image
                style={{height: 21, width: 21, marginLeft: 9}}
                source={{
                  uri:
                    'https://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png',
                }}
              />
              <Text style={styles.collegeName}>
                Colegio Adventista de Maranata
              </Text>
              <IconButton
                style={{marginTop: -31}}
                icon="menu-down"
                color="grey"
                size={51}
                onPress={() => console.log('Pressed')}
              />
            </View>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
        <View style={{height: 21}} />

        <Button
          labelStyle={{color: colors.accent}}
          mode="contained"
          color={colors.primary}
          style={styles.Button}
          onPress={() => navigation.navigate('OtpPassword')}>
          send Email
        </Button>
      </View>
    </MenuProvider>
  );
};

export default Find;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '40%',
    width: '60%',
    alignSelf: 'center',
  },
  find: {
    width: '90%',
    backgroundColor: '#d3d3d3',
    alignSelf: 'center',
    height: 51,
    borderRadius: 9,
  },
  schooltext: {
    marginLeft: 9,
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 9,
  },
  row: {
    flexDirection: 'row',
  },
  collegeName: {
    marginLeft: 9,
    fontWeight: 'bold',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '72%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 3,
    color: 'grey',
  },
});
