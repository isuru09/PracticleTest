import { Component, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import * as theme from "../constants/theme";

export default class Typography extends Component {
    render(): ReactNode {
        const{
            children,
            center,
            h1,
            normal,
            title,
            normalbold,
            style,
            big,
            ...props
        }=this.props;

        const textStyles = [
            center && styles.center,
            h1 && styles.h1,
            title && styles.title,
            normal && styles.normal,
            normalbold && styles.normalb,
            big && styles.big,
            style
        ]

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    center:{textAlign: 'center',},
    bold:{fontWeight: 'bold',},
    h1:theme.fonts.h1,
    title:theme.fonts.title,
    normal:theme.fonts.normal,
    normalb:theme.fonts.normalb,
    big:theme.fonts.big,
});