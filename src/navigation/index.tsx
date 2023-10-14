import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import LoginScreen from "../screens/loginScreen";
import BottomTabNavigator from "./bottomTabNavigator";

const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={screens.login}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;