import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgresssCircle from '../../components/ProgresssCircle' 
import Table from '../../components/Table'
const PostSubject = () => {
    return (
        <View>
            <ProgresssCircle />
            <Table />
            <Text>PostSubject</Text>
        </View>
    )
}

export default PostSubject

const styles = StyleSheet.create({})
