import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import HomeScreen from "../screens/homeScreen";
import ProductScreen from "../screens/productScreen";
import CheckoutScreen from "../screens/checkoutScreen";

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screens.home}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={screens.product}
                    component={ProductScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
}

export default HomeStack;