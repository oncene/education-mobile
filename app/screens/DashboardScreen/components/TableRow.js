import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'native-base';
import {Context as ThemeContext} from '../../../context/ThemeContext';
import {State} from 'react-native-gesture-handler';
const TableRow = ({data}) => {
  const {state} = useContext(ThemeContext);

  return (
    <ListItem style={styles.listItem}>
      <View style={{flex: 2}}>
        <Text
          style={[styles.tableHead, boldFont, {color: state.colors.text01}]}>
          {data.name}
        </Text>
        <Text style={[styles.tableHead, {color: state.colors.text02}]}>
          {data.created_at}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.tableHead, {color: state.colors.text01}]}>
          {data.status}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.tableHead, {color: state.colors.text01}]}>
          {data.score}
        </Text>
      </View>
      <View style={{flex: 0.4}}>
        <Icon
          name="comment-text-outline"
          type="MaterialCommunityIcons"
          style={{fontSize: 22, color: state.colors.active}}
        />
      </View>
    </ListItem>
  );
};

const boldFont = {fontFamily: 'Poppins-Medium'};

const styles = StyleSheet.create({
  listItem: {
    height: 40,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  tableHead: {
    fontSize: 12,
    color: '#838785',
    textAlign: 'left',
  },
});

export default TableRow;
