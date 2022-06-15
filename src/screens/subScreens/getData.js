import axios from "axios";
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import { TEXT_THEME_LIGHT } from "../../utils/localStorage";

function Card({ navigation, props, tp }) {
    const type = tp.type
    const [title, setTitle] = useState("")
    function getTitle(string) {
        setTitle(() => {
            if (string === "movie") return props.original_title;
            else if (string === "tv") return props.original_name;
            else return "Undefined08"
        })
    }
    useEffect(() => {
        getTitle(type)
    }, [title])
    const setImg = () => {
        let img = props.poster_path != null
            ? props.poster_path
            : props.backdrop_path
        return img
    }
    try {
        return (
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => navigation.navigate('Details', { data: [props, tp] })}
            >
                <Image style={styles.card} source={{ uri: `https://www.themoviedb.org/t/p/w220_and_h330_face${setImg()}` }} />
                <Text style={styles.moviName}>{title}</Text>
            </TouchableOpacity>
        )
    }
    catch (e) {
        console.log(e)
    }
}

function FilmList({ navigation, link }) {
    const [films, setfilms] = useState([])
    const [path, setPath] = useState("")
    const [type, setType] = useState("")
    const [type2, setType2] = useState("")
    const [title, setTitle] = useState("")

    function getType(str) {
        let type = str.split("/")
        setType(type[4])
    }

    function getType2(str) {
        let _final
        if (str != null) {
            let type = str.split("?")
            _final = type[0].split("/")
            setType2(_final[5])
        }
    }

    function getTitle(string) {
        setTitle(() => {
            if (string === "movie") return "Movies";
            else if (string === "tv") return "TV Shows";
        })
    }

    const setCategories = (string) => {
        let _final
        switch (string) {
            case 'popular':
                _final = "Popular"
                break
            case "upcoming":
                _final = "Upcoming"
                break
            case "on_the_air":
                _final = "Currently Airing"
                break
        }
        return _final
    }

    function getfilms() {
        axios({
            method: 'GET',
            url: path
        }).then(
            (res) => {
                return setfilms(res.data.results)
            }
        ).catch(
            (e) => console.log(e)
        )
    }

    useEffect(() => {
        setPath(link)
        getType(path)
        getType2(path)
        getTitle(type)
        getfilms()
    }, [type])

    return (
        <View style={styles.listView}>
            <Text style={styles.header}>{setCategories(type2)} {title}</Text>
            <FlatList
                style={{ marginTop: 6 }}
                data={films}
                keyExtractor={(item) => item.id}
                renderItem={(element) => {
                    return (
                        <Card navigation={navigation} props={element.item} tp={{ type: type }} />
                    )
                }}
                horizontal={true}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    listView: {
        width: '110%',
        flex: 0.5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    moviName: {
        width: 130,
        fontSize: 12,
        fontWeight: '800',
        color: TEXT_THEME_LIGHT,
    },
    cardContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white'
    },
    textContainer: {
        width: 130,
        alignItems: 'center,',
    },
    card: {
        height: 185,
        width: 130,
        borderRadius: 8,
        marginHorizontal: 8,
    },
})

export default FilmList