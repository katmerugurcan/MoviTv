import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { SEARCH_QUERY, SMALL_IMAGE } from './localStorage'
import Ionicon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'


export default function SearchBar(props) {
    const [isFocused, setIsFocused] = useState(false)
    const [isData, setIsData] = useState(false)
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    const [dataRes, setDataRes] = useState(Number)

    const handleTextChange = () => {
        if (query != "") {
            axios.get(
                SEARCH_QUERY(props.type, query)
            ).then(
                (res) => {
                    setData(res.data.results)
                    setDataRes(res.data.total_results)
                }
            ).catch((e) => console.log(e))
        } else { setData([]) }
    }
    const Card = (text, img) => {
        return (
            <TouchableOpacity
                style={styles.touchable_card}
                onPress={() => {
                    setQuery(text)
                }}
            >
                <Image style={styles.small_container} source={{ uri: img }} resizeMode='cover' />
                <Text style={styles.results_font}>{text}</Text>
            </TouchableOpacity>
        )
    }

    const _search = () => {
        if (dataRes === 1) {
            console.log(data.media_type)
            // navigation.navigate("Details", { data: [data, data.media_type] })
        }
        else if (dataRes > 0) {
            data != [] &&
                props.setResData(data)
        }
    }

    useEffect(() => {
        handleTextChange()
        query === "" &&
            setData([])
        query === "" &&
            setIsData(false)
        data != []
            ? setIsData(data.length > 0)
            : setIsData(data.length > 0)
    }, [query])

    return (
        <View
            style={styles.drawer_search}
        >
            <TextInput
                style={[
                    styles.searchBar,
                    isData && isFocused
                        ? styles.onDrawerTrue
                        : styles.onDrawerFalse
                ]}
                placeholder='Search'
                value={query}
                onFocus={() => {
                    setIsFocused(true)
                }}
                onChangeText={(value) => {
                    setQuery(value)
                }}
                onSubmitEditing={() => {
                    setIsFocused(false)
                    setQuery("")
                    _search()
                }}
            />
            {
                isFocused &&
                <FlatList
                    style={[styles.flat_list, { maxHeight: 280 }]}
                    data={data}
                    keyboardShouldPersistTaps={'always'}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        let name;
                        switch (props.type) {
                            case "movie":
                                name = item.original_title
                                break
                            case "tv":
                                name = item.original_name
                                break
                            case "multi":
                                name = item.media_type === "movie"
                                    ? item.original_title
                                    : item.original_name
                                break
                        }
                        let poster = item.backdrop_path != null
                            ? item.backdrop_path
                            : item.poster_path
                        return Card(name, SMALL_IMAGE(poster))
                    }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        zIndex: 1,
        width: '100%',
        elevation: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 20,
        color: '#910000',
        fontWeight: 'bold',
    },
    results_font: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    drawer_search: {
        // flexDirection: 'row',
        width: '89.9%',
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white',
        elevation: 12,
        borderRadius: 30,
        marginTop: '2%',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 10,
    },
    flat_list: {
        width: '100%',
    },
    touchable_card: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 1,
        paddingLeft: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    small_container: {
        marginLeft: 2,
        height: 60,
        width: 40,
        borderRadius: 4,
        borderWidth: 0.5,
    },
    onDrawerTrue: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    onDrawerFalse: {
        borderRadius: 30,
    },
})