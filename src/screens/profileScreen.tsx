import { Image, StyleSheet, View } from "react-native";
import * as theme from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import IconNameRow from "../components/iconNameRow";
import { Button } from "../components";
import Header from "../components/header";
import useProfileViewController from "../view-controllers/useProfileViewController";

const ProfileScreen = () => {
    const { userData, userDataFull,logout } = useProfileViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Header title={userData.firstName + ' ' + userData.lastName} />

            <View style={styles.content}>
                <Image source={{ uri: userData.image }} style={styles.img} />
                <IconNameRow icon={theme.images.cake} text={'Birth Date'} btext={userDataFull.birthDate} />
                <IconNameRow icon={userDataFull.gender=='male'?theme.images.sex:userDataFull.gender=='female'?theme.images.sexf:theme.images.sext} text={''} btext={userDataFull.gender} />
                <IconNameRow icon={theme.images.phone} text={'Contact'} btext={userDataFull.phone} />
                <IconNameRow icon={theme.images.hat} text={'Studied at'} btext={userDataFull.university} />
                <IconNameRow icon={theme.images.location} text={'From'} btext={userDataFull.address?.city} />
                <IconNameRow icon={theme.images.work} text={'Works at'} btext={userDataFull.company?.name} />
                <IconNameRow icon={theme.images.job} text={'Work as a'} btext={userDataFull.company?.title} />
            </View>
            <View style={styles.btn}>
                <Button text={'Logout'} onPress={logout} />
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
        backgroundColor: theme.colors.white,
    },
    img: {
        marginVertical: theme.sizes.hpoints * 5,
        alignSelf: 'center',
        width: theme.sizes.hpoints * 20,
        height: theme.sizes.hpoints * 20,
        borderRadius: theme.sizes.hpoints * 10,
    },
    content: {
        flex: 9,
        gap: theme.sizes.hpoints * 1.5,
    },
    btn: {
        flex: 1
    }
});

export default ProfileScreen;