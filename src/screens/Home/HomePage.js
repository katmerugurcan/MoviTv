import { StyleSheet, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import FilmList from '../subScreens/getData'
import { FILM_URL, HOME_BG, LIST_OF_TV } from '../../utils/localStorage'
import SearchBar from '../../utils/searchBar'
import Header from './components/Header'

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.bg} source={{ uri: HOME_BG }}>
            <Header />
            <SearchBar navigation={navigation} type='multi' />
            <FlatList
                style={styles.container}
                data={LIST_OF_TV}
                renderItem={(element) => {
                    return (
                        <FilmList navigation={navigation} link={FILM_URL(element.item)} />
                    )
                }}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: { flex: 1, height: '110%', width: '100%', alignItems: 'center' },
    container: {
        flex: 1,
        width: '100%',
    },
})