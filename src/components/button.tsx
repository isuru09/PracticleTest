import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme";

export default class Button extends Component {
    render() {
        const {
            text,
            onPress,
            ...props
        } = this.props;


        return (
            <TouchableOpacity 
                style={styles.sectionStyle}
                onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.sizes.hpoints * 1,
        borderColor: theme.colors.greyop,
        borderWidth: theme.sizes.hpoints * 0.15,
        height: theme.sizes.hpoints * 6.5,
        width: theme.sizes.wpoints * 90,
        alignSelf: 'center',
        backgroundColor: theme.colors.purple,
    },
    text: {
        fontFamily: theme.fontnames.poppins,
        fontSize: theme.sizes.normal,
        color: theme.colors.white,
        padding: theme.sizes.hpoints
    }
});