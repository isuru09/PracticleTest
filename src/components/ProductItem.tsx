import { Component } from "react";
import { Image, StyleSheet, TouchableOpacity} from "react-native";
import { Text } from "../components";
import * as theme from "../constants/theme";

export default class ProductItem extends Component {
    render() {
        const {
            item,
            onPress,
            ...props
        } = this.props;


        return (
            <TouchableOpacity style={styles.item} onPress={onPress}>
                <Text title>{item.title}</Text>
                <Text normal>{item.description}</Text>
                <Image source={{uri: item.thumbnail}} style={styles.img} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        alignSelf:'center',
        padding:theme.sizes.hpoints*2,
        gap:theme.sizes.hpoints
    },
    img:{
        width:theme.sizes.wpoints*90,
        height: theme.sizes.hpoints*22
    }
});