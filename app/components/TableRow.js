import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'native-base';

const TableRow = ({data}) => {
  return (
    <ListItem style={styles.listItem}>
      <View style={{flex: 2}}>
        <Text style={[styles.tableHead, boldFont]}>{data.name}</Text>
        <Text style={styles.tableHead}>{data.created_at}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.tableHead}>{data.status}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.tableHead}>{data.score}</Text>
      </View>
      <View style={{flex: 0.4}}>
        <Icon
          name="comment-text-outline"
          type="MaterialCommunityIcons"
          color="#838785"
        />
      </View>
    </ListItem>
  );
};

const boldFont = {fontWeight: 'bold'};

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
