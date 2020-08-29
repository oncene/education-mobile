import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderComponents from '../components/HeaderComponents'
import GroupCard from '../components/GroupCard'

const GroupScreen = () => {
    return (
        <View>
              <HeaderComponents title="Group" />
              <GroupCard />
              <GroupCard />
              <GroupCard />
        </View>
    )
}

export default GroupScreen

const styles = StyleSheet.create({})
