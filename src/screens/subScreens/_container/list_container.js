import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

export default function ListItem({ navigation, props }) {
  const [data, setData] = useState([])

  const getData = () => {
    setData(props.data)
  }

  const List = () => {
    data.map((e) => {
      return <Text>{e.original_title}</Text>
    })
  }

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => { console.log(data) }, [data])

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={(element) => {
        return <Card navigation={navigation} props={element.item} />
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