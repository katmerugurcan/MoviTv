import { ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FILM_URL, HOME_BG, LIST_OF_TV } from '../../utils/localStorage'
import SearchBar from '../../utils/searchBar'
import Header from './components/Header'
import axios from 'axios'
import ListItem from '../subScreens/_container/list_container'
import SearchList from '../subScreens/_container/search_container'

export default function MoviesScreen(navigation) {

    const [data, setData] = useState([])
    const [resData, setResData] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const [stateMng, setStateMng] = useState([])
    const [current, setCurrent] = useState(0)

    const getData = () => {
        axios.get(
            FILM_URL(LIST_OF_TV[0])
        ).then((res) => {
            setData(res.data.results)
        }).catch((e) => console.log(e))
    }

    const Container = () => {
        if (isSearch) {
            return <ListItem navigation={navigation} props={{ data: { data }, type: "movie" }} />
        } else {
            return <SearchList navigation={navigation} props={resData} />
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     data.map((e) => { console.log(e) })
    // }, [data])

    useEffect(() => {
        resData != [] &&
            setIsSearch(true)
    }, [resData])

    return (
        <ImageBackground
            style={styles.bg}
            source={{ uri: HOME_BG }}
        >
            {/*<=========HEADER=========>*/}
            <Header />
            <SearchBar type="movie" data={setResData} />
            <ListItem navigation={navigation} props={{ data: data, type: "movie" }} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%', alignItems: 'center' },
    header: {
        flex: 0.12,
        width: '100%',
        opacity: 1,
        elevation: 18,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'grey',
    },
    header_title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#D30707',
    },
    button: {
        marginTop: '1%',
        width: 120,
        height: 55,
        borderRadius: 16,
        borderWidth: 0.3,
    },
})