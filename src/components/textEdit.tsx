import { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as theme from "../constants/theme";

export default class TextEdit extends Component {
    render() {
        const {
            placeholder,
            password,
            onChange,
            ...props
        } = this.props;


        return(
            <View style={styles.sectionStyle}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.textEdit}
                    placeholderTextColor={theme.colors.greyop}
                    underlineColorAndroid="transparent"
                    secureTextEntry={password ? true : false}
                    onChangeText={(text:string)=>onChange(text)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.sizes.hpoints*1,
        borderColor:theme.colors.greyop,
        borderWidth:theme.sizes.hpoints*0.15,
        height:theme.sizes.hpoints*6,
        width:theme.sizes.wpoints*90,
        alignSelf:'center'
    },
    textEdit: {
        flex:1,
        fontFamily:theme.fontnames.poppins,
        fontSize:theme.sizes.normal,
        color:theme.colors.grey,
        padding:theme.sizes.hpoints
    }
});