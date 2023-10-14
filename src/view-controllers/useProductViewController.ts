import { useEffect, useState } from "react";
import useProductViewModel from "../view-models/userProdcuctViewModel";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useProductViewController = () =>{
    const [qty,setQty]=useState(0);
    const {fetchProduct,selectedProduct,getSingleProduct,addToCart}=useProductViewModel();
    const navigation=useNavigation();

    const back = () =>{
        navigation.goBack();
    }

    useEffect(()=>{
        getSingleProduct()
    },[]);

    const addProductTocart = (pro:any) =>{
        addToCart(pro,qty);
        navigation.navigate(screens.cart);
    }

    return{
        fetchProduct,
        selectedProduct,
        qty,
        addProductTocart,
        setQty,
        back
    }
}

export default useProductViewController;