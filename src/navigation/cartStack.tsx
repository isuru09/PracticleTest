import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import ProductScreen from "../screens/productScreen";
import CheckoutScreen from "../screens/checkoutScreen";
import CartScreen from "../screens/cartScreen";

const CartStack = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screens.cart}
                    component={CartScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={screens.checkout}
                    component={CheckoutScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
}

export default CartStack;