import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as theme from "../constants/theme";
import Header from "../components/Header";
import useProductViewController from "../view-controllers/useProductViewController";
import { Text } from "../components";
import Button from "../components/button";
import Slider, { SliderComponent } from "@react-native-community/slider";



const ProductScreen = () => {
    const { fetchProduct, selectedProduct, qty, addProductTocart, back, setQty } = useProductViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="" back noborder backFunc={back} />
            {fetchProduct ? (
                <Text normal center style={styles.load}>Getting data...</Text>
            ) : (
                <View style={styles.detContainer}>
                    <View style={styles.imgRow}>
                        <TouchableOpacity style={styles.handle}>
                            <Image source={theme.images.back} style={styles.simg} />
                        </TouchableOpacity>
                        
                        <Image source={{ uri: selectedProduct.thumbnail }} style={styles.img} />
                        <TouchableOpacity style={styles.handle}>
                            <Image source={theme.images.next} style={styles.simg} />
                        </TouchableOpacity>
                    </View>

                    <Text title>{selectedProduct.title}</Text>
                    <Text normal>{selectedProduct.description}</Text>
                    <View style={styles.row}>
                        <Text title>Price</Text>
                        <Text normal>{selectedProduct.price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text title>Feedback</Text>
                        <Text normal>{selectedProduct.rating}</Text>
                    </View>
                    <Text title center>Quantity</Text>
                    <View style={styles.row}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor={theme.colors.purple}
                            maximumTrackTintColor={theme.colors.greyop}
                            value={qty}
                            onValueChange={(v)=>setQty(Math.floor(v))}
                        />
                    </View>
                    <Button text={'Add to Cart'} onPress={()=>addProductTocart(selectedProduct)} />
                </View>

            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    load: {
        marginTop: theme.sizes.hpoints * 5
    },
    detContainer: {
        marginTop: theme.sizes.hpoints * 2,
        width: theme.sizes.wpoints * 90,
        alignSelf: 'center',
        gap: theme.sizes.hpoints * 0.2,
    },
    img: {
        width: theme.sizes.wpoints * 82,
        height: theme.sizes.hpoints * 22,
    },
    handle:{
        height: theme.sizes.hpoints * 22,
        alignItems:'center',
        justifyContent:'center'
    },
    simg: {
        width: theme.sizes.wpoints * 3,
        height: theme.sizes.hpoints * 3,
    },
    imgRow: {
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: theme.sizes.hpoints * 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    slider: {
        width: theme.sizes.wpoints * 90,
        height: theme.sizes.hpoints
    }
});

export default ProductScreen;