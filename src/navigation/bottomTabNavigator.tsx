import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as theme from "../constants/theme";
import { Image, StyleSheet } from "react-native";
import ProfileScreen from "../screens/profileScreen";
import HomeStack from "./homeStack";
import { screens } from "./screens";
import CartStack from "./cartStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: theme.sizes.hpoints * 10,
                    borderTopColor:theme.colors.greyop,
                    borderTopWidth: theme.sizes.hpoints * 0.2,
                }
            }}
            initialRouteName={screens.homestack}
        >
            <Tab.Screen
                name={screens.homestack}
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
                name={screens.cartStack}
                component={CartStack}
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
                name={screens.profile}
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