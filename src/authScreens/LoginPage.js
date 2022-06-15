import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { THEME_LIGHT } from '../utils/localStorage'

export default function LoginScreen({ navigation }) {
    return (
        <LinearGradient
            style={styles.gradient}
            colors={THEME_LIGHT}
        >
            <View style={styles.container}>
                <LinearGradient style={styles.header} colors={['#DD421E', '#90321C', '#5B2C21']} >
                    <Text style={styles.title}>MoviTv</Text>
                </LinearGradient>
                <View style={styles.column}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.signin}
                        >
                            <Text style={[styles.title, { color: '#21E3DF' }]}>SignIn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.login}
                            onPress={() => navigation.navigate('Tab', navigation = { navigation })}
                        >
                            <Text style={[styles.title, { color: 'white' }]}>LogIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: '70%',
        width: '80%',
        borderRadius: 12,
        elevation: 6,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        position: 'relative',
        marginVertical: 4,
        borderRadius: 6,
        width: '80%',
        height: 55,
        elevation: 8,
        borderWidth: 0.3,
        borderColor: '#21E3DF',
        backgroundColor: 'white',
    },
    header: {
        top: 40,
        width: 160,
        height: 60,
        borderRadius: 40,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 24, fontWeight: 'bold', color: 'white' },
    signin: {
        width: '38%',
        height: 40,
        margin: 6,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: '#21E3DF',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    login: {
        width: '38%',
        height: 40,
        margin: 6,
        borderRadius: 8,
        backgroundColor: '#21E3DF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
})