import { Text, View, Image } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Splash, VideoPlayer } from '../screens'
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
        </Stack.Navigator>
    )
}

export default AppNavigator

