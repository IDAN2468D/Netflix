import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, FONTSIZE, Font, SPACING, myColors } from '../utils/Theme'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { baseImagePath } from '../apis/Network'
import { useNavigation } from '@react-navigation/native'

const MovieCards = ({ MovieCards, data }) => {
    const navigation = useNavigation();
    const handleOnClick = (movieData) => {
        navigation.navigate("VideoPlayer", { movieData })
    }


    const RenderMovieCard = ({ item, index }) => {
        console.log(item)
        return (
            <TouchableOpacity style={{ paddingHorizontal: SPACING.space_8, }} onPress={() => handleOnClick(item)}>
                <Image source={{ uri: baseImagePath("w500", item.poster_path) }} resizeMode="cover" style={styles.movieImage} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{MovieCards}</Text>
            <ScrollView horizontal pagingEnabled>
                {data.map((item, index) => {
                    return (
                        <RenderMovieCard key={index} item={item} />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(40),
        gap: 15,
        marginTop: SPACING.space_10,
    },
    title: {
        color: myColors.secondary,
        fontSize: FONTSIZE.size_17,
        fontFamily: Font.AntaRegular,
        letterSpacing: 1,
        marginRight: SPACING.space_10,
    },
    movieImage: {
        width: responsiveWidth(50),
        height: "100%",
        borderRadius: BORDERRADIUS.radius_10,
    }
})