import { useNavigation } from "@react-navigation/native";
import useProductViewModel from "../view-models/userProdcuctViewModel";
import { screens } from "../navigation/screens";

const useCheckoutViewController = () =>{
    const {cart,clearAllCart}=useProductViewModel();
    const navigation=useNavigation();
    let total=0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if(cart.length>0){
        cart.forEach(element => {
            total+=element.price*element.qty;
        });
        total=formatter.format(total);
    }

    const back = () =>{
        navigation.goBack();
    }

    const clearCart = () =>{
        clearAllCart();
        navigation.navigate(screens.home);
    }

    return{
        total,
        back,
        clearCart
    };
}

export default useCheckoutViewController;