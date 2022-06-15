import Ionicon from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DEFAULT_BP, DETAIL_BACK_PATH, OVERVİEW_NULL, setpath } from '../../utils/localStorage'

export default function FilmDetailScreen({ route, navigation }) {

    const [imgBack, setImageBack] = useState(DEFAULT_BP)
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [year, setYear] = useState("")
    const data = route.params.data[0]
    const type = route.params.data[1].type

    function title_name(str) {
        setTitle(() => {
            if (str === "movie") return data.original_title;
            else if (str === "tv") return data.original_name;
            else return ""
        })
    }

    function getDate(str) {
        setDate(() => {
            if (str === "movie") return data.release_date
            else if (str === "tv") return data.first_air_date
            else return "Undefined08"
        })
    }

    function getYear(str) {
        setYear(str.split("-")[0])
    }

    function getRandom(max) {
        return Math.floor(Math.random() * max)
    }

    useEffect(() => {
        getDate(type)
        setImageBack(DETAIL_BACK_PATH[getRandom(DETAIL_BACK_PATH.length)])
        title_name(type, "type")
        getYear(date)
        setName(`${title} (${year})`)
    }, [name])

    return (
        <ImageBackground
            style={styles.imgBg}
            source={{ uri: imgBack }}
            resizeMode={'cover'}
        >
            <ImageBackground
                style={styles.header}
                borderBottomLeftRadius={16}
                borderBottomRightRadius={16}
                resizeMode={'stretch'}
                source={{ uri: `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data.backdrop_path}` }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.button}
                >
                    <Ionicon
                        name='arrow-back-sharp'
                        color={'white'}
                        size={42}
                    />
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.name_title}>{name}</Text>
                </View>
            </ImageBackground>
            <View style={styles.overview_container}>
                <ScrollView  >
                    <Text style={styles.overview_title}>Overview</Text>
                    <Text style={styles.overview_style} >{data.overview === "" ? OVERVİEW_NULL : data.overview}</Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        height: 240,
        width: '100%',
        justifyContent: 'space-between',
        opacity: 1,
    },
    imgBg: {
        flex: 1,
        width: '100%',
    },
    name_title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    title_container: {
        backgroundColor: '#262626',
        // backgroundColor: '#AA5151',
        // backgroundColor: '#444141',
        alignItems: 'center',
        paddingVertical: 1,
        paddingHorizontal: 20,
        borderRadius: 32,
        // borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
        opacity: 0.7,
    },
    overview_title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 16,
    },
    overview_style: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        margin: 16,
    },
    overview_container: {
        flex: 0.95,
        backgroundColor: '#262626',
        // backgroundColor: '#444141',
        opacity: 0.75,
        padding: 4,
        marginVertical: '2%',
    },
    button: {
        // backgroundColor: '#444141',
        backgroundColor: '#262626',
        width: 60,
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginLeft: 8,
        opacity: 0.7,
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    },
})