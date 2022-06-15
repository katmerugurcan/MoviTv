import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicon from 'react-native-vector-icons/Ionicons'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import LoginScreen from './src/authScreens/LoginPage'
import HomeScreen from './src/screens/Home/HomePage'
import MoviesScreen from './src/screens/Movie/MoviesPage'
import SeriesScreen from './src/screens/Tv/SeriesPage'
import FilmDetailScreen from './src/screens/subScreens/FilmDetails'


export const Tab = createBottomTabNavigator()

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: '#1B1B1B',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarOptions,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName

          size = 32
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home-sharp' : 'home-outline'
              break
            case 'Movies':
              iconName = focused ? 'film-sharp' : 'film-outline'
              break
            case 'Series':
              iconName = focused ? 'tv-sharp' : 'tv-outline'
              break
          }
          return < Ionicon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#D30707',
        tabBarInactiveTintColor: '#EC2B2B',
      })
      }
    >
      <Tab.Screen name='Movies' component={MoviesScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Series' component={SeriesScreen} />
    </Tab.Navigator >
  )
}

export const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({ headerShown: false })} initialRouteName='Tab' >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Tab' component={TabScreen} />
        <Stack.Screen name='Details' component={FilmDetailScreen} />
      </Stack.Navigator >
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({
  tabBarOptions: {
    backgroundColor: '#000000'
  }
})