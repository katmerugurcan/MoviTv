import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TEXT_THEME_LIGHT, SMALL_IMAGE } from '../../../../utils/localStorage'

export default function Card({ navigation, props }) {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [type, setType] = useState("")

    const setValues = (type) => {
        if (type != "") {
            switch (type) {
                case "movie":
                    setName(props.data.original_title)
                    break
                case "tv":
                    setName(props.data.original_name)
                    break
            }
            setPoster(props.data.backdrop_path)
        }
    }

    const getData = () => {
        setData(props.data)
        props.type === "" &&
            setType(data.media_type)
    }

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

    useEffect(() => {
        console.log(props.data)
        setValues(props.type)
    }, [data])

    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Image style={styles.imgBox} source={{ uri: SMALL_IMAGE(poster) }} resizeMode='cover' />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 185,
        width: 130,
        margin: 2,
        backgroundColor: 'grey',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgBox: {
        width: '98%',
        height: '90%',
        borderRadius: 8,
    },
    title: {
        width: '90%',
        fontSize: 12,
        fontWeight: '800',
        color: TEXT_THEME_LIGHT,
    },
})