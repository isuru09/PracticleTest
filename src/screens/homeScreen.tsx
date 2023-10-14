import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useHomeViewController from "../view-controllers/useHomeViewController";
import * as theme from "../constants/theme";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";


const HomeScreen = () => {
    const {products,setProductId}=useHomeViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Products" />
            <FlatList
                data={products.products}
                renderItem={({item})=><ProductItem item={item} onPress={()=>setProductId(item.id)}/>}
                keyExtractor={(item)=>item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme.colors.white
    },
});

export default HomeScreen;