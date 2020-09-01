import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderComponents from '../components/HeaderComponents'
import Colabration from '../components/Colabration'


const ColabrationScreen = () => {
    return (
        <View>
              <HeaderComponents title="Home" />
              <Colabration />
              <Colabration />
              <Colabration />
        </View>
    )
}

export default ColabrationScreen

const styles = StyleSheet.create({})
