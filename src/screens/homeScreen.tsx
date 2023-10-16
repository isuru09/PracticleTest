import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useHomeViewController from "../view-controllers/useHomeViewController";
import * as theme from "../constants/theme";
import Header from "../components/header";
import ProductItem from "../components/productItem";
import { Text } from "../components";


const HomeScreen = () => {
    const { fetchProducts, products, setProductId } = useHomeViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Products" />
            {fetchProducts ? (
                <Text normal center style={styles.load}>Getting data...</Text>
            ) : (
                <FlatList
                    data={products.products}
                    renderItem={({ item }) => <ProductItem item={item} onPress={() => setProductId(item.id)} />}
                    keyExtractor={(item) => item.id}
                />
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    load:{
        marginTop:theme.sizes.hpoints*5
    }
});

export default HomeScreen;