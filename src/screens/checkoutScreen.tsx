import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as theme from "../constants/theme";
import useCheckoutViewController from "../view-controllers/useCheckoutViewController";
import Header from "../components/Header";
import Button from "../components/button";
import { Text } from "../components";
import { RadioButton } from 'react-native-paper';

const CheckoutScreen = () => {
    const { total, back, clearCart } = useCheckoutViewController();
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Checkout" back backFunc={back} />
            <View style={styles.content}>
                <Text normal>Total</Text>
                <Text normal big center>{total}</Text>
                <View>
                    <Text normalbol>Payment Method</Text>
                    <View style={styles.row}>
                        <RadioButton
                            value="first"
                            status={'checked'}
                            onPress={() => { }}
                        />
                        <Text normal>Cash On Delivery</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btn}>
                <Button text={'Pay Now'} onPress={clearCart} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    content: {
        flex: 9,
        width: theme.sizes.wpoints * 90,
        alignSelf: 'center',
        paddingVertical: theme.sizes.hpoints * 5,
        gap: theme.sizes.hpoints * 4,
    },
    btn: {
        flex: 1
    },
    row: {
        marginTop: theme.sizes.hpoints,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default CheckoutScreen;