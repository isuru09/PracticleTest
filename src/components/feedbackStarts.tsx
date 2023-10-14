import { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View} from "react-native";
import { Text } from "../components";
import * as theme from "../constants/theme";

export default class FeedbackStars extends Component {
    render() {
        const {
            score,
            ...props
        } = this.props;

        var stars = [];
        for(let i = 1; i <= 5; i++){
            if(score>=i){
                stars.push(
                    <Image source={theme.images.starf} style={styles.img} key={i}/>
                )
            }else{
                stars.push(
                    <Image source={theme.images.star} style={styles.img} key={i}/>
                )
            }
        }

        return (
            <View style={styles.item}>
                { stars }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
    },
    img: {
        width: theme.sizes.wpoints * 4,
        height: theme.sizes.hpoints * 2,
    },
});