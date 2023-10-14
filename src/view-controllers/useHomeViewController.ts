import { useEffect } from "react";
import useProductViewModel from "../view-models/userProdcuctViewModel";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useHomeViewController = () =>{
    const {fetchProducts,products,getAllProducts,setSingleProduct}=useProductViewModel();
    const navigation=useNavigation();

    useEffect(()=>{
        getAllProducts()
    },[]);

    const setProductId = (id:number) =>{
        setSingleProduct(id);
        navigation.navigate(screens.product);
    }

    return{
        fetchProducts,
        products,
        setProductId
    }
}

export default useHomeViewController;