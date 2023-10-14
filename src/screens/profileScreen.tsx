import { Image, StyleSheet, View } from "react-native";
import * as theme from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import useUserViewController from "../view-controllers/useUserViewController";
import IconNameRow from "../components/iconNameRow";
import Button from "../components/button";

const ProfileScreen = () => {
    const { userData,logout} = useUserViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: userData.image }} style={styles.img} />
            <IconNameRow icon={theme.images.user} text={'Username'} btext={userData.username}/>
            <IconNameRow icon={theme.images.user} text={'Name'} btext={userData.firstName+' '+userData.lastName}/>
            <IconNameRow icon={theme.images.cake} text={'Birth Date'} btext={'2000-12-25'}/>
            <IconNameRow icon={theme.images.sex} text={''} btext={userData.gender}/>
            <IconNameRow icon={theme.images.phone} text={'Contact'} btext={'+63 791 675 8914'}/>
            <IconNameRow icon={theme.images.hat} text={'Studied at'} btext={'Capital University'}/>
            <IconNameRow icon={theme.images.location} text={'From'} btext={'Washington'}/>
            <IconNameRow icon={theme.images.cake} text={'Works at'} btext={'Facebook'}/>
            <IconNameRow icon={theme.images.cake} text={'Work as a'} btext={'Help desk'}/>
            <View style={styles.btn}>
            <Button text = { 'Logout' } onPress = { logout }/>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.sizes.hpoints*1.5,
        backgroundColor: theme.colors.white,
    },
    img: {
        marginVertical: theme.sizes.hpoints * 5,
        alignSelf: 'center',
        width: theme.sizes.hpoints * 20,
        height: theme.sizes.hpoints * 20,
        borderRadius: theme.sizes.hpoints * 10,
    },
    btn:{
        marginTop: theme.sizes.hpoints*10,
    }
});

export default ProfileScreen;