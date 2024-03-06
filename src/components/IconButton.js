import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { myColors } from '../utils/Theme';


const IconButton = (props) => {
    return (
        <TouchableOpacity style={props.container} onPress={props.onPress} activeOpacity={0.8}>
            <Feather name={props.icon} size={props.size} color={myColors.primary} />
            <Text style={props.titles}>{props.Play}</Text>
        </TouchableOpacity>
    )
}

export default IconButton;