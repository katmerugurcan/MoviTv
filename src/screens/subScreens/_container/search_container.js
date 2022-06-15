import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

export default function SearchList({ props, navigation }) {
    const [data, setData] = useState([])
    const [type, setType] = useState("")

    const setValues = () => {
        setData(props.data)
    }

    useEffect(() => {
        setValues()
    }, [data])

    return (
        <FlatList
            style={styles.list}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <Card data={item} />
            }}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
    },
})