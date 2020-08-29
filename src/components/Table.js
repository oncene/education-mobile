import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Practice & Theory </DataTable.Title>
        <DataTable.Title numeric>Stuatus</DataTable.Title>
        <DataTable.Title numeric>80/100</DataTable.Title>
      </DataTable.Header>
      <DataTable.Header>
        <DataTable.Title>Practice & Theory </DataTable.Title>
        <DataTable.Title numeric>Stuatus</DataTable.Title>
        <DataTable.Title numeric>80/100</DataTable.Title>
      </DataTable.Header>
      <DataTable.Header>
        <DataTable.Title>Practice & Theory </DataTable.Title>
        <DataTable.Title numeric>Stuatus</DataTable.Title>
        <DataTable.Title numeric>80/100</DataTable.Title>
      </DataTable.Header>
      <DataTable.Header>
        <DataTable.Title>Practice & Theory </DataTable.Title>
        <DataTable.Title numeric>Stuatus</DataTable.Title>
        <DataTable.Title numeric>80/100</DataTable.Title>
      </DataTable.Header>
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({});
