import { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View} from "react-native";
import { Text } from "../components";
import * as theme from "../constants/theme";

export default class CartItem extends Component {
    render() {
        const {
            item,
            onPress,
            ...props
        } = this.props;


        return (
            <View style={styles.item}>
                <Image source={{uri: item.thumbnail}} style={styles.img} />
                <View style={styles.textRow}>
                    <Text title>{item.title}</Text>
                    <View style={styles.qRow}>
                        <Text normal>Quantity {item.qty}</Text>
                        <TouchableOpacity onPress={()=>onPress(item.id)}><Text normal style={styles.redText}>Delete</Text></TouchableOpacity>
                    </View>
                </View>
                <Text title style={styles.total}>{item.price*item.qty}$</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        padding:theme.sizes.hpoints*1,
        borderBottomColor:theme.colors.greyop,
        borderBottomWidth:theme.sizes.hpoints*0.2,
        width:theme.sizes.wpoints*95,
        alignSelf:'center',
        alignItems:'center'
    },
    img:{
        width:theme.sizes.wpoints*15,
        height: theme.sizes.hpoints*7.5,
        marginRight:theme.sizes.hpoints*1,
        flex:2
    },
    qRow:{
        flexDirection:'row',
    },
    redText:{
        color:theme.colors.red,
        marginLeft:theme.sizes.hpoints*2
    },
    textRow:{
        flex:8
    },
    total:{
        flex:1.7,
        textAlign:'right'
    }
});