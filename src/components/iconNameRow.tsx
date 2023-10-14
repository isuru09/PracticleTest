import { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from ".";
import * as theme from "../constants/theme";

export default class IconNameRow extends Component {
    render() {
        const {
            icon,
            text,
            btext,
            ...props
        } = this.props;

        return (
            <View style={styles.row}>
                <Image source={icon} style={styles.img} />
                {text && (<Text normal>{text}</Text>)}
                <Text normalbold>{btext}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        gap:theme.sizes.hpoints * 1,
        width:theme.sizes.wpoints*85,
        alignItems:'center',
        alignSelf:'center',
    },
    img: {
        width: theme.sizes.hpoints * 3,
        height: theme.sizes.hpoints * 3,
    }
});