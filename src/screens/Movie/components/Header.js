import { Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import { THEME_DARK } from '../../../utils/localStorage'

export default function Header() {
    return (
        <LinearGradient style={styles.header} colors={THEME_DARK} >
            <Text style={styles.title}>MoviTv</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        flex: 0.2,
        width: '100%',
        opacity: 1,
        elevation: 18,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#D30707',
    },
})
