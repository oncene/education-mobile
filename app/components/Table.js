import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Content, List, ListItem, Text} from 'native-base';
import TableRow from './TableRow';

const Table = () => {
  const data = [
    {
      id: 1,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 2,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 3,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 4,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 5,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    /* {
      id: 6,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 7,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 8,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 9,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 10,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 11,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 12,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 13,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    },
    {
      id: 14,
      name: 'Practice #1 Theory',
      status: 'Passed',
      score: '80/100',
      created_at: '23 Dec 2020',
    }, */
  ];

  return (
    <View style={styles.tableContainer}>
      <ListItem style={{borderBottomWidth: 2}}>
        <View style={{flex: 2}}>
          <Text style={styles.tableHead}>Name</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.tableHead}>Status</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.tableHead}>Score</Text>
        </View>
        <View style={{flex: 0.4}}>
          <Text style={styles.tableHead}></Text>
        </View>
      </ListItem>
      <FlatList
        style={styles.flatList}
        horizontal={false}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({item}) => {
          return (
            <View
              onPress={() =>
                navigation.navigate('SearchDetail', {id: item.id})
              }>
              <TableRow data={item} />
            </View>
          );
        }}
      />
      <ListItem style={styles.practiceRow}>
        <View style={{flex: 3}}>
          <Text style={styles.tableHead}>Practices</Text>
        </View>
        <View style={{flex: 1.4}}>
          <Text style={styles.tableHead}>56.25</Text>
        </View>
      </ListItem>
      <ListItem style={styles.examRow}>
        <View style={{flex: 3}}>
          <Text style={styles.tableHead}>Exam</Text>
        </View>
        <View style={{flex: 1.4}}>
          <Text style={styles.tableHead}>65</Text>
        </View>
      </ListItem>
      <ListItem style={styles.totalRow}>
        <View style={{flex: 3}}>
          <Text style={styles.tableHead}>Total</Text>
        </View>
        <View style={{flex: 1.4}}>
          <Text style={styles.tableHead}>68.625%</Text>
        </View>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    padding: 10,
    flex: 1,
  },
  tableHead: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#838785',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: -10,
  },
  flatList: {
    maxHeight: 200,
  },
  practiceRow: {
    height: 15,
    borderBottomWidth: 2,
  },
  examRow: {
    height: 15,
    borderBottomWidth: 2,
  },
  totalRow: {
    height: 15,
    borderBottomWidth: 2,
  },
});

export default Table;
