import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FONTSIZE, Font, myColors } from '../../utils/Theme';
import { baseImagePath } from '../../apis/Network';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IconButton } from '../../components';
import Video from 'react-native-video'

const VideoPlayer = ({ route }) => {
    const {
        title,
        release_date,
        genre,
        poster_path,
        overview,
        backdrop_path,
        vote_count
    } = route.params.movieData;

    //const isVideoVisible = useRef(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false)
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <View style={styles.minContainer}>
            <StatusBar backgroundColor={myColors.primary} translucent />
            <ScrollView scrollContainer>
                {
                    isVideoVisible
                        ? <Video
                            style={styles.firstContainer}
                            resizeMode="cover"
                            setControls
                            controls
                            repeat={false}
                            source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                        />
                        : <Image
                            style={styles.firstContainer}
                            source={{
                                uri: baseImagePath("w500", backdrop_path)
                            }} />
                }
                <View style={styles.secondContainer}>
                    <View style={{ flexDirection: "row-reverse", alignItems: 'center', gap: 10 }}>
                        <Fontisto name='netflix' size={22} color={myColors.red} />
                        <Text style={{ fontSize: 15, color: myColors.secondary, letterSpacing: 5 }}>SERIES</Text>
                    </View>
                    <Text style={styles.secondTitle}>{title}</Text>
                    <View style={{ flexDirection: "row-reverse", alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 16, color: myColors.secondary }}>{release_date.split('-')[0]}</Text>
                        <View style={{ width: 2.5, height: 20, backgroundColor: myColors.secondary, }} />
                        <View style={{ flexDirection: "row-reverse", alignItems: 'center', gap: 5 }}>
                            <MaterialIcons name='favorite' size={20} color={favorite ? myColors.secondary : myColors.red} onPress={toggleFavorite} />
                            < Text style={{ color: myColors.secondary, fontSize: 16, fontWeight: '700' }}>{vote_count}%</Text>
                            <MaterialIcons name='hd' size={20} color={myColors.secondary} />
                        </View>
                    </View>
                    <View style={{ padding: 10, gap: 10, alignItems: "center", marginTop: 5, }}>
                        <IconButton
                            Play="Play"
                            icon="play"
                            size={20}
                            container={{
                                backgroundColor: myColors.secondary,
                                width: responsiveWidth(90),
                                height: responsiveHeight(6),
                                borderRadius: 5,
                                flexDirection: "row-reverse",
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                            }}
                            titles={{
                                fontSize: responsiveFontSize(2),
                                color: myColors.primary,
                                fontWeight: '700',
                            }}
                            onPress={() => { setIsVideoVisible(true) }}
                        />
                        <IconButton
                            Play="Download"
                            icon="download"
                            size={20}
                            container={{
                                backgroundColor: myColors.secondary,
                                width: responsiveWidth(90),
                                height: responsiveHeight(6),
                                borderRadius: 5,
                                flexDirection: "row-reverse",
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                            }}
                            titles={{
                                fontSize: responsiveFontSize(2),
                                color: myColors.primary,
                                fontWeight: '700',
                            }}
                            onPress={() => { console.log("Clicked Play Button") }}
                        />
                        <Text style={styles.subTitle}>{overview}</Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    minContainer: {
        flex: 1,
        backgroundColor: myColors.primary,
        marginTop: StatusBar.currentHeight,
    },
    scrollContainer: {
        flex: 1,
    },
    firstContainer: {
        height: responsiveHeight(35),
    },
    secondContainer: {
        padding: 10,
        gap: 10
    },
    secondTitle: {
        color: myColors.secondary,
        fontSize: 20,
        fontFamily: Font.AntaRegular
    },
    subTitle: {
        color: myColors.secondary,
        fontSize: 16,
        marginVertical: 10,
        lineHeight: 25
    },
})