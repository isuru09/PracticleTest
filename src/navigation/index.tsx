import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import LoginScreen from "../screens/loginScreen";
import BottomTabNavigator from "./bottomTabNavigator";
import useUserViewController from "../view-controllers/useUserViewController";

const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    const { userData } = useUserViewController();

    if (Object.keys(userData).length > 0) {
        return (
            <BottomTabNavigator />
        )
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name={screens.login}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

export default AppContainer;