import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components";
import TextEdit from "../components/textEdit";
import * as theme from "../constants/theme";
import Button from "../components/button";
import useUserViewController from "../view-controllers/useUserViewController";

const LoginScreen = () => {
    const { msg, onChangeUsername, onChangePassword, login, loggingIn,errMsg } = useUserViewController();
    return (
        <SafeAreaView style={styles.container}>
            <Text h1 center style={styles.title}>Practical Test</Text>
            <TextEdit placeholder={'Username'} onChange={(text: string) => onChangeUsername(text)} />
            <TextEdit placeholder={'Password'} password onChange={(text: string) => onChangePassword(text)} />
            {msg && (<Text normal center style={styles.msg}>{msg}</Text>)}
            {errMsg && (<Text normal center style={styles.msg}>{errMsg}</Text>)}
            {loggingIn ? (
                <Text normal center>{'Logging in...'}</Text>
            ): (
                <Button text = { 'Login' } onPress = { login }/>
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        gap: theme.sizes.hpoints * 4,
        backgroundColor:theme.colors.white
    },
    title: {
        marginBottom: theme.sizes.hpoints * 5
    },
    msg: {
        color: theme.colors.red
    }
});

export default LoginScreen;