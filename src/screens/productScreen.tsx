import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as theme from "../constants/theme";
import Header from "../components/Header";
import useProductViewController from "../view-controllers/useProductViewController";
import { Text, Button } from "../components";
import Slider from "@react-native-community/slider";
import FeedbackStars from "../components/feedbackStarts";



const ProductScreen = () => {
    const { fetchProduct, selectedProduct, qty, imgIndex, msg, addProductTocart, back, setQty, nextImg, prevImg } = useProductViewController();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="" back noborder backFunc={back} />
            {fetchProduct ? (
                <Text normal center style={styles.load}>Getting data...</Text>
            ) : (
                <View style={styles.detContainer}>
                    <View style={styles.content}>
                        <View style={styles.imgRow}>
                            <TouchableOpacity style={styles.handle} onPress={() => prevImg(selectedProduct.images.length)}>
                                <Image source={theme.images.back} style={styles.simg} />
                            </TouchableOpacity>

                            <Image source={{ uri: selectedProduct.images[imgIndex] }} style={styles.img} />

                            <TouchableOpacity style={styles.handle} onPress={() => nextImg(selectedProduct.images.length)}>
                                <Image source={theme.images.next} style={styles.simg} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.descRow}>
                            <Text title>{selectedProduct.title}</Text>
                            <Text normal>{selectedProduct.description}</Text>
                        </View>

                        <View>
                            <View style={styles.priceRow}>
                                <Text title>Price</Text>
                                <Text normal>{selectedProduct.price}$</Text>
                            </View>
                            <View style={styles.ratingRow}>
                                <Text title>Feedback</Text>
                                <FeedbackStars score={Math.floor(selectedProduct.rating)} />
                            </View>
                        </View>

                        <View>
                            <Text title center>Quantity</Text>
                            <View style={styles.sliderRow}>
                                <Text title>0</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={10}
                                    minimumTrackTintColor={theme.colors.purple}
                                    maximumTrackTintColor={theme.colors.greyop}
                                    value={qty}
                                    onValueChange={(v) => setQty(Math.floor(v))}
                                    thumbTintColor={theme.colors.purple}
                                />
                                <Text title>10</Text>
                            </View>
                        </View>
                        
                    </View>
                    {msg && (<Text normal center style={styles.msg}>{msg}</Text>)}
                    <View style={styles.btn}>
                        <Button text={`Add to Cart (${qty})`} onPress={() => addProductTocart(selectedProduct)} />
                    </View>

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
        width: theme.sizes.wpoints * 99,
        alignSelf: 'center',
        gap: theme.sizes.hpoints * 0.2,
        flex: 1
    },
    img: {
        width: theme.sizes.wpoints * 90,
        height: theme.sizes.hpoints * 22,
    },
    handle: {
        height: theme.sizes.hpoints * 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    simg: {
        width: theme.sizes.wpoints * 3,
        height: theme.sizes.hpoints * 3,
    },
    imgRow: {
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    descRow: {
        width: theme.sizes.wpoints * 90,
        alignSelf: 'center'
    },
    sliderRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: theme.sizes.wpoints * 90,
        alignSelf: 'center'
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: theme.sizes.wpoints * 84,
        marginLeft: theme.sizes.wpoints * 4,
        alignItems: 'flex-end',
    },
    ratingRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: theme.sizes.wpoints * 84,
        marginLeft: theme.sizes.wpoints * 4,
    },
    slider: {
        width: theme.sizes.wpoints * 70,
    },
    msg: {
        color: theme.colors.red,
        flex: 0.5,
    },
    content: {
        flex: 8.5,
        gap: theme.sizes.hpoints * 4,
    },
    btn: {
        flex: 1
    }
});

export default ProductScreen;