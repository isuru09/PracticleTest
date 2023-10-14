import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as theme from "../constants/theme";
import { Image, StyleSheet } from "react-native";
import ProfileScreen from "../screens/profileScreen";
import CartScreen from "../screens/cartScreen";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: theme.sizes.hpoints * 10,
                }
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? theme.images.homes : theme.images.home}
                            style={styles.menu}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? theme.images.carts : theme.images.cart}
                            style={styles.menu}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? theme.images.users : theme.images.user}
                            style={styles.menu}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    menu: {
        width:theme.sizes.wpoints*5,
        height:theme.sizes.wpoints*5
    },
});

export default BottomTabNavigator;