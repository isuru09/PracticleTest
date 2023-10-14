import { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../components";
import * as theme from "../constants/theme";

export default class Header extends Component {
    render() {
        const {
            title,
            back,
            backFunc,
            noborder,
            ...props
        } = this.props;


        return (
            <View style={noborder?styles.headerrownb:styles.headerrow}>
                {back && (<TouchableOpacity style={styles.back} onPress={backFunc}><Text normal>Back</Text></TouchableOpacity>)}
                <Text style={styles.header} title center>{title}</Text>
                {back && (<View style={styles.back}></View>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerrow:{
        flexDirection:'row',
        height:theme.sizes.hpoints*8,
        borderBottomColor:theme.colors.greyop,
        borderBottomWidth:theme.sizes.hpoints*0.2,
        alignItems:'center',
        justifyContent:'center',
    },
    headerrownb:{
        flexDirection:'row',
        height:theme.sizes.hpoints*8,
        alignItems:'center',
        justifyContent:'center',
    },
    back:{
        flex:1,
        paddingStart:theme.sizes.hpoints*3,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flex:5,
    }
});