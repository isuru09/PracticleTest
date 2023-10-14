import { useNavigation } from "@react-navigation/native";
import useProductViewModel from "../view-models/userProdcuctViewModel";
import { screens } from "../navigation/screens";

const useCartViewController = () => {
    const {cart,removeFromCart}=useProductViewModel();
    const navigation=useNavigation();

    const removeItemFromCart = (id:number) =>{
        removeFromCart(id);
    }

    const checkOut = () =>{
        navigation.navigate(screens.checkout);
    }

    return{
        cart,
        removeItemFromCart,
        checkOut
    }
}

export default useCartViewController;