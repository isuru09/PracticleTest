import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import LoginScreen from "../screens/loginScreen";
import BottomTabNavigator from "./bottomTabNavigator";
import HomeScreen from "../screens/homeScreen";
import ProductScreen from "../screens/productScreen";

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