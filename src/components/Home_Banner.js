import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Font, myColors } from '../utils/Theme'
import { baseImagePath, getUpcomingMovies } from '../apis/Network';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { IconButton } from '.';

const Home_Banner = () => {
    const [upcomingApiData, setUpcomingApiData] = useState([])
    useEffect(() => {
        const handleUpComingApi = async () => {
            const { data, status } = await getUpcomingMovies()
            if (status === 200) {
                setUpcomingApiData(data.results)
            } else {
                Alert.alert(`Request failed with ${data}`)
            }
        }
        handleUpComingApi();
    }, []);


    const RenderMovieBanner = ({ item, index }) => {
        return (
            <ImageBackground
                style={styles.movieBanner}
                resizeMode="cover"
                source={{ uri: baseImagePath("w500", item.poster_path) }}
            >
                <LinearGradient
                    style={styles.linearContainer}
                    colors={[myColors.blackRGBA_1, myColors.blackRGBA_2]}
                >
                    <Text style={styles.titles}>My List</Text>
                    <IconButton
                        Play="Play"
                        icon="play"
                        size={25}
                        container={{
                            backgroundColor: myColors.secondary,
                            width: responsiveWidth(25),
                            height: responsiveHeight(5.5),
                            borderRadius: 10,
                            flexDirection: "row-reverse",
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 5,
                        }}
                        titles={{
                            fontSize: responsiveFontSize(2.3),
                            color: myColors.primary,
                            fontWeight: '700',
                        }}
                        onPress={() => { console.log("Clicked Play Button") }}
                    />
                    <Text style={styles.titles}>Info</Text>
                </LinearGradient>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal pagingEnabled>
                {upcomingApiData.map((item, index) => (
                    <RenderMovieBanner
                        item={item}
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Home_Banner

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(70),
        width: "100%",
    },
    movieBanner: {
        width: responsiveWidth(100),
        height: "100%",
        justifyContent: "flex-end",
        opacity: 0.9,
    },
    linearContainer: {
        flex: 0.2,
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        alignItems: 'center',
        alignSelf: "stretch",
    },
    titles: {
        fontSize: responsiveHeight(3),
        color: myColors.secondary,
        fontWeight: '700',
        fontFamily: Font.AntaRegular,
    }
})