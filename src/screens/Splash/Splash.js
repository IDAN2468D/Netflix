import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { myColors } from '../../utils/Theme'
import LottieView from "lottie-react-native";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000);
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"transparent"} translucent />
            <LottieView
                source={require("../../assets/lottie/Animation.json")}
                style={styles.logo}
                autoPlay
                loop
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: "100%",
        height: "100%",
    }
})