import { FlatList, StyleSheet, View } from "react-native";
import * as theme from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import useCartViewController from "../view-controllers/userCartViewController";
import CartItem from "../components/cartItem";
import { Text, Button } from "../components";

const CartScreen = () => {
    const { cart, removeItemFromCart, checkOut } = useCartViewController();
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Cart" />
            <View style={styles.list}>
                {cart.length > 0 ? (
                    <FlatList
                        data={cart}
                        renderItem={({ item, index }) => <CartItem item={item} key={index} onPress={removeItemFromCart} />}
                    />
                ) : (
                    <Text normal center style={styles.nodata}>No items...</Text>
                )}

            </View>
            <View style={styles.btn}>
                {cart.length > 0 && (
                    <Button text={'Checkout'} onPress={checkOut} />
                )}

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    list: {
        marginTop: theme.sizes.hpoints * 3,
        flex: 9
    },
    btn: {
        flex: 1
    },
    nodata:{
        marginTop: theme.sizes.hpoints,
    }
});

export default CartScreen;