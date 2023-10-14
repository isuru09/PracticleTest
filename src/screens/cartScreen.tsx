import { FlatList, StyleSheet } from "react-native";
import * as theme from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import useCartViewController from "../view-controllers/userCartViewController";
import CartItem from "../components/CartItem";

const CartScreen = () =>{
    const {cart,removeItemFromCart}=useCartViewController();
    console.log(cart);
    return(
        <SafeAreaView style={styles.container}>
            <Header title="Cart" />
            <FlatList
                    data={cart}
                    renderItem={({ item,index }) => <CartItem item={item} key={index} onPress={removeItemFromCart}/>}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: theme.sizes.hpoints * 4,
        backgroundColor:theme.colors.white
    },
});

export default CartScreen;