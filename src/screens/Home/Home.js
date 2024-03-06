import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { myColors } from '../../utils/Theme';
import { Home_Banner, MovieCards } from '../../components';
//import { getNowPlayingMovies } from '../../apis/Network';
import useAxiosHook from '../../customHook/useAxiosHook'

const Home = () => {
    const [newPlayingData, popularMovies, ratedMovies] = useAxiosHook();

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="default" />
            <ScrollView style={styles.scrollView}>
                <Home_Banner />
                <View style={styles.subContainer}>
                    <MovieCards MovieCards="New Playing" data={newPlayingData} />
                    <MovieCards MovieCards="Popular Movies" data={popularMovies} />
                    <MovieCards MovieCards="Top Rated Movies" data={ratedMovies} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.primary,
    },
    scrollView: {
        flex: 1,
    },
    subContainer: {
        paddingHorizontal: 15,
        gap: 10,
        marginTop: 20,
    }
})